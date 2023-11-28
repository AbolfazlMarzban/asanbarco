import { mongooseConnect } from "@/lib/mongoos";
import { driverCalls } from "@/models/driverCalls";
import { drivers } from "@/models/drivers";



export default async function handler(req: any, res: any) {
    mongooseConnect();
    const { method } = req;
    if(method == "GET"){
        const id = req.query.cargoID
        let result = await driverCalls.find({cargoId: id})
        if(result){
            // var data : any = result
            // if(data.length > 0){
            //     for(var i=0; i < data.length; i++){
            //         var driver = await drivers.findOne({_id: data[i].driverId})
            //         console.log('driver', driver)
            //         if(driver){
            //             data[i]["driver"] = driver
            //         }
            //     }
            // }
            // console.log('data', data)
            res.json(result)
        }
    }
}