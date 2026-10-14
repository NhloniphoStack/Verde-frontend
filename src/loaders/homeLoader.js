import { getFeatured } from "../api/getFeatured.js";

export async function homeLoader(){
    return {
        featured: getFeatured()
    }
}