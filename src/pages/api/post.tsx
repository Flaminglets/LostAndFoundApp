import { createAddPosts, getAddPosts, deletePost, updatePost } from '../../../lib/backend/database';
import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../lib/backend/models/User';


interface PostRequestBody {
    type: string,
    date: string,
    time: string,
    location: string,
    lostFname: string,
    lostLname: string,
    gender: string,
    otherGender: string,
    age: number,
    weight: number,
    height: number,
    eyecolor: string,
    image: string,
    additional: string,
    userFname: string,
    userLname: string,
    phoneNum: string,
    email: string,
    userID: any,
    postID: any,
    newData: any
}

interface PostRequestBody extends NextApiRequest {
    body: PostRequestBody;
}


export default async function handler(req: PostRequestBody, res: NextApiResponse) {
    try {
        if (req.method == 'POST') {
            const data = req.body;
            const { type, date, time, location,
                lostFname, lostLname, gender, otherGender,
                age, weight, height, eyecolor,
                additional, image, userFname, userLname, phoneNum,
                email, userID } = data; // destructuring

            await createAddPosts(type, date, time, location,
                lostFname, lostLname, gender, otherGender,
                age, weight, height, eyecolor,
                additional, image, userFname, userLname, phoneNum,
                email, userID);

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
            const postID = data;

            await deletePost(postID);
            res.status(200).json(
                {
                    success: true
                }
            );
            return;
        }

        // updatePost - pass the poster id and new data to modify an exisitng post's information.
        else if (req.method == "PUT") {
            const data = req.body;
            const { postID, newData } = data;

            await updatePost(postID, newData);
            res.status(200).json(
                {
                    success: true
                }
            )
        }

        // getPost - gets all the existing post from the database
        else if (req.method == 'GET') {
            const data = await getAddPosts();
            res.status(200).json(data);
            return
        }

    } catch {
        res.status(404).send({ error: "Error with post" })
    }
}
