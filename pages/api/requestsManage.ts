import { mongooseConnect } from "@/lib/mongoos";
import { cargoRequests } from "@/models/cargoRequests";




export default async function handler(req: any, res: any) {
    mongooseConnect();
    const { method } = req;
    if(method == "GET"){

    }
    if(method == "POST"){
        const data = req.body
        console.log('data', data)
        const request = await cargoRequests.findOne({cargoId: data.cargoId})
        if(request){
            console.log('req', request)
            console.log('gooooz')
        }
    }
}