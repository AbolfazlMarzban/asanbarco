import { mongooseConnect } from "@/lib/mongoos";
import { abouts } from "@/models/abouts";
import { Socials } from "@/models/socials";




export default async function handler(req: any, res: any) {
    mongooseConnect();
    const { method } = req;
    if(method == "GET"){
        const about = await abouts.find()
        const social = await Socials.find()
        let data = {
            'abouts': about,
            'socials': social
        }
        res.json(data)
    }
}