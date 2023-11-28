import { mongooseConnect } from "@/lib/mongoos";
import { driverCalls } from "@/models/driverCalls";
import { drivers } from "@/models/drivers";



export default async function handler(req: any, res: any) {
    mongooseConnect();
    const { method } = req;
    if(method == "GET"){

    }
    if(method == "POST"){
        const data = req.body
        console.log('data', data)
    }
}