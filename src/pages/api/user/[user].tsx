import { getUserAddPosts } from '../../../../lib/backend/database';

 // Finds posts by post type
export default async function handler(req, res) {
    const { user } = req.query
    try {
        if (req.method !== 'GET') {
            return;
        }
        
        if (req.method == 'GET') {
            console.log("working here")
            const posts = await getUserAddPosts(user);
            res.status(200).json(posts);
            return;
        }
    } catch {
        res.status(404).send({ error: "Unable to find a post" });
    }
}