import LocalDate from "@/helpers/date";
import LocalTime from "@/helpers/time";
import { mongooseConnect } from "@/lib/mongoos";
import { cargoRequests } from "@/models/cargoRequests";




export default async function handler(req: any, res: any) {
    mongooseConnect();
    const { method } = req;
    if(method == "GET"){
        const id = req.query.id
        const result = await cargoRequests.find({cargoId: id})
        if(result){
            res.json(result)
        }
    }
    if(method == "POST"){
        const data = req.body
        console.log('data',data)
        let date = LocalDate()
        let time = LocalTime()
        const request = await cargoRequests.findOne({cargoId: data.cargoId})
        if(request){
            // console.log('req', request)
            res.json(false)
        } else{
            const result = await cargoRequests.create({'cargoId': data.cargoId, 'driverId': data.driverId, 'status': 'ongoing', "reqDate": date, "reqTime": time })
            if(result){
                res.json(true)
            }
        }
    }
}