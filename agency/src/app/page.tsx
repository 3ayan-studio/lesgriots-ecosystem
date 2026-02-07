import { redirect } from 'next/navigation'

export default function RootPage() {
    // This function is a Server Component.
    // It executes on the server and instantly redirects the browser.
    redirect('/home')
}