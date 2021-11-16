import { createAddPosts, getAddPosts } from '../../../lib/backend/database';

//step 3, create the API
export default async function handler(req, res) {
    if (req.method == 'POST') {
        const data = req.body;
        const { type, date, time, location,
            lostFname, lostLname, gender, age, weight, 
            height, eyecolor, additional, userFname, 
            userLname, phoneNum, email } = data; // destructuring

        // step 4, connect to db and create cheetah
        await createAddPosts(type, date, time, location,
            lostFname, lostLname, gender, age, weight, 
            height, eyecolor, additional, userFname, 
            userLname, phoneNum, email);
        res.status(200).json(
            {
                success : true
            }
        );
        return;
    }
    const data = await getAddPosts();
    res.status(200).json(data);
}