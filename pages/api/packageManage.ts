import LocalDate from "@/helpers/date";
import LocalTime from "@/helpers/time";
import { mongooseConnect } from "@/lib/mongoos";
import { cargoOwners } from "@/models/cargoOwners";
import { wallet } from "@/models/wallet";
import axios from "axios";
import { cargo } from "@/models/cargo";
import { Gateways } from "@/models/gateways";

export default async function handler(req: any, res: any) {
    await mongooseConnect();
    const { method } = req;
    if (method == "GET") {
    }
    if(method == "POST"){
        const data = req.body
        const date = LocalDate()
        const time = LocalTime()
        // console.log('data', data)
        let duration;
        if(data.duration == 'monthly'){
            duration = 30;
        } else if(data.duration == 'weekly'){
            duration = 7;
        }
        if(data.walletPay){
            const payfromWallet = await wallet.create({"userID": data.userID, "date": date, "amount": -data.walletPay, "time": time})
        }
        if(data.payAmount){
            const user = await cargoOwners.findOne({_id: data.userID})
            // console.log('user', user)
            // var code = '942ab142-ed88-4412-8c9f-ab8658074bcf'
            let code = await Gateways.find({})
            if(user && code){
              const result = await axios.post('https://api.zarinpal.com/pg/v4/payment/request.json', {
                "merchant_id": code[0].asanbarcogateway,
                "amount": data.payAmount*10,
                "callback_url": "https://asanbar.iran.liara.run/newCargo/fallback",
                "description": "Transaction description.",
                "metadata": {"mobile": user.phoneNumber.toString(), "email": "info.test@gmail.com"}
              },
              {
                headers: {
                  "Content-Type": 'application/json',
                  "Accept": '*/*'
                }
              })
              if(result){ 
                const path = "https://www.zarinpal.com/pg/StartPay/" + result.data.data.authority
                res.json({
                    "path": path
                })
              }
            }
        }
        if(!data.payAmount){
          let cd = data.cargoData
          const cargoData = JSON.parse(cd)
          let selectedDay = ''
          if(cargoData.selectedDay){
            selectedDay = cargoData.selectedDay.year.toString() + '/' + cargoData.selectedDay.month.toString() + '/' + cargoData.selectedDay.day.toString()
       }
       const result = await cargo.create({"origin": cargoData.origin, "desination": cargoData.dest,"barnameh": cargoData.barnameh, "carrier": cargoData.carrier,
       "feeType": cargoData.feeType,"suggestedFee": cargoData.fee, "cargoType": cargoData.cargoType, "weightType": cargoData.weight,
       "loadingTime": cargoData.loadingTime, "dischargeTime": cargoData.dischargeTime,"phoneNumber": cargoData.phone,"loadingDate": cargoData.loadingDate, "selectedDay": selectedDay
       , "comments": cargoData.comment, "regDate": date, "regTime": time, "userRegID": cargoData.userRegID, "regType": cargoData.regType, "specialDate": new Date(), 'specialDuration': duration
   }) 
        }
        
    }
    if(method == "PATCH"){
        const data = req.body
        let cd = req.body.cargoData
        const cargoData = JSON.parse(cd)
        let du = req.body.duration
        let duration;
        if(du == 'weekly'){
            duration = 7;
        }
        if(du == 'monthly'){
            duration = 30;
        }
        let selectedDay = ''
        let time = LocalTime()
        let date = LocalDate()
        if(cargoData.selectedDay){
             selectedDay = cargoData.selectedDay.year.toString() + '/' + cargoData.selectedDay.month.toString() + '/' + cargoData.selectedDay.day.toString()
        }
        const result = await cargo.create({"origin": cargoData.origin, "desination": cargoData.dest,"barnameh": cargoData.barnameh, "carrier": cargoData.carrier,
        "feeType": cargoData.feeType,"suggestedFee": cargoData.fee, "cargoType": cargoData.cargoType, "weightType": cargoData.weight,
        "loadingTime": cargoData.loadingTime, "dischargeTime": cargoData.dischargeTime,"phoneNumber": cargoData.phone,"loadingDate": cargoData.loadingDate, "selectedDay": selectedDay
        , "comments": cargoData.comment, "regDate": date, "regTime": time, "userRegID": cargoData.userRegID, "regType": cargoData.regType, "specialDate": new Date(), 'specialDuration': duration
    })
        if(result){
          res.json(true)
        }
    }
}