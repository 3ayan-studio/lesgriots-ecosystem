import { client } from "./client";
import { groq } from "next-sanity";

// 1. Fetch All Projects (For the Home Page)
export async function getProjects() {
    return client.fetch(
        groq`*[_type == "project"] | order(_createdAt desc) {
            _id,
            title,
            "slug": slug.current,
            coverImage
        }`,
        {},
        {
            // 🏷️ TAGGING: This data belongs to the "project" collection
            next: { tags: ['project'] }
        }
    );
}

// 2. Fetch Single Project (For the Detail Page)
export async function getProject(slug: string) {
    return client.fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            title,
            coverImage,
            videoUrl
        }`,
        { slug },
        {
            // 🏷️ TAGGING: Even single items belong to the "project" collection
            next: { tags: ['project'] }
        }
    );
}