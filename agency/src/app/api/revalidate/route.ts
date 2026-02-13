import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'
import { revalidateTag } from 'next/cache'

export async function POST(req: NextRequest) {
    try {
        interface WebhookBody {
            _type: string;
            slug?: { current: string };
        }

        // 1. Check for the Secret (Security)
        // We read the raw body to verify the signature from Sanity
        const { isValidSignature, body } = await parseBody(
            req,
            process.env.SANITY_REVALIDATE_SECRET
        )

        // If the secret is wrong, reject the request
        if (!isValidSignature) {
            return new Response('Invalid Signature', { status: 401 })
        }

        // 2. Identify what changed
        const { _type } = body as WebhookBody

        // If there is no type, we can't do anything
        if (!_type) {
            return new Response('Bad Request', { status: 400 })
        }

        // 3. The Magic Command
        // This wipes the cache for ANYTHING tagged with this type (e.g., 'post', 'author')
        revalidateTag(_type, 'default')

        // Optional: Log it so you can see it in PM2 logs
        console.log(`🚀 Revalidated tag: ${_type}`)

        return NextResponse.json({
            status: 200,
            revalidated: true,
            now: Date.now(),
            type: _type,
        })
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(err)
            return new Response(err.message, { status: 500 })
        }
        console.error('An unknown error occurred', err)
        return new Response('An unknown error occurred', { status: 500 })
    }
}