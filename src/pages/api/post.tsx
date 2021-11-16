import { createAddPosts, getAddPosts, deletePost, updatePost } from '../../../lib/backend/database';

export default async function handler(req, res) {
    try {
        if (req.method == 'POST') {
            const data = req.body;
            const { type, date, time, location,
                lostFname, lostLname, gender, otherGender,
                age, weight, height, eyecolor, ethnicity,
                additional, userFname, userLname, phoneNum,
                email } = data; // destructuring

            // step 4, connect to db and create cheetah
            await createAddPosts(type, date, time, location,
                lostFname, lostLname, gender, otherGender,
                age, weight, height, eyecolor, ethnicity,
                additional, userFname, userLname, phoneNum,
                email);
            res.status(200).json(
                {
                    success: true
                }
            );
            return;
        }

        // deletePost - pass the poster id to delete the poster.
        else if (req.method == 'DELETE') {
            const data = req.body;
            const { postID } = data;

            await deletePost(postID);
            res.status(200).json(
                {
                    success: true
                }
            );
            return;
        }

        // updatePost - pass the poster id and new data to modify an exisitng post's information.
        else if (req.method == "PATCH") {
            const data = req.body;
            const { postID, newData } = data;

            await updatePost(postID, newData);
            res.status(200).json(
                {
                    success: true
                }
            )
        }

        const data = await getAddPosts();
        res.status(200).json(data);
    } catch {
        res.status(404).send({ error: "Error with post" })
    }
}
