import { mongooseConnect } from "@/lib/mongoos";
import { cargo } from "@/models/cargo";
import LocalDate from "@/helpers/date";
import LocalTime from "@/helpers/time";
import { cargoRequests } from "@/models/cargoRequests";


export default async function handler(req: any, res: any) {
mongooseConnect();
const { method } = req;
if(method == "POST"){
    const data = req.body
    console.log('data', data)
    let selectedDay = ''
    let time = LocalTime()
    let date = LocalDate()
    if(data.selectedDay){
         selectedDay = data.selectedDay.year.toString() + '/' + data.selectedDay.month.toString() + '/' + data.selectedDay.day.toString()
    }
    const result = await cargo.create({"origin": data.origin, "desination": data.dest,"barnameh": data.barnameh, "carrier": data.carrier,
    "feeType": data.feeType,"suggestedFee": data.fee, "cargoType": data.cargoType, "weightType": data.weight,
    "loadingTime": data.loadingTime, "dischargeTime": data.dischargeTime,"phoneNumber": data.phone,"loadingDate": data.loadingDate, "selectedDay": selectedDay
    , "comments": data.comment, "regDate": date, "regTime": time, "userRegID": data.userRegID, "regType": data.regType, "specialDate": '', 'specialDuration': null
})
    if(result){
        res.json(true)
    }
}
if(method == "GET"){
    const userID = req.query.userID
    if(userID){
        let result:any = await cargo.find({userRegID: userID})
        if(result){
            res.json(result)
        }
    }
}

function getReqs(){

}
}