import { getPostByType } from '../../../../lib/backend/database';

 // Finds posts by post type
export default async function handler(req, res) {
    // resource: https://nextjs.org/docs/api-routes/dynamic-api-routes
    const { postType } = req.query
    try {
        if (req.method !== 'GET') {
            return;
        }
        
        if (req.method == 'GET') {
            const posts = await getPostByType(postType);
            res.status(200).json(posts);
            return;
        }
    } catch {
        res.status(404).send({ error: "Unable to find a post" });
    }
}