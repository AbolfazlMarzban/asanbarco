import { mongooseConnect } from "@/lib/mongoos";
import { Vehicles } from "@/models/vehicles";


export default async function handler(req: any, res: any) {
    await mongooseConnect();
    const { method } = req;
    if(method == "GET"){
        const result = await Vehicles.find({})
        if(result){
            res.json(result)
        }
    }
  
}