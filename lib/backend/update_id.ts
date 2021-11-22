import Addpost from "./models/Addpost";

export default async function UpdatePost(){
    const update = await Addpost.findOneAndUpdate(
        {location: 'Person'},
        {new: true}
    )
}