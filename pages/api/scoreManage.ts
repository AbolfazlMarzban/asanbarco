import { mongooseConnect } from "@/lib/mongoos";
import { Score } from "@/models/scrore";


export default async function handler(req: any, res: any) {
    await mongooseConnect();
    const { method } = req;
    if(method == "GET"){
        const userID = req.query.userID
        const result = await Score.find({userID: userID})
        if(result){
            res.json(result)
        }
    }
}