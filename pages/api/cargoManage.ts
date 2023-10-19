import { mongooseConnect } from "@/lib/mongoos";
import { cargo } from "@/models/cargo";


export default async function handler(req: any, res: any) {
mongooseConnect();
const { method } = req;
if(method == "POST"){
    const data = req.body
    console.log('data', data)
    let selectedDay = ''
    if(data.selectedDay){
         selectedDay = data.selectedDay.year.toString() + '/' + data.selectedDay.month.toString() + '/' + data.selectedDay.day.toString()
    }
    console.log('selectedDay', selectedDay)
    // const result = await cargo.create({"origin": data.origin, "desination": data.dest,"barnameh": data.barnameh, "carrier": data.carrier,
    // "feeType": data.feeType,"suggestedFee": data.fee, "cargoType": data.cargoType, "weightType": data.weight,
    // "loadingType": data.loadingTime, "dischargeTime": data.dischargeTime,"phoneNumber": data.phone,"loadingDate": data.loadingDate, selectedDay })

}

}