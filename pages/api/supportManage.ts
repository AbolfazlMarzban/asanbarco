import LocalDate from "@/helpers/date";
import LocalTime from "@/helpers/time";
import { mongooseConnect } from "@/lib/mongoos";
import { Messages } from "@/models/messages";

export default async function handler(req: any, res:any){
    await mongooseConnect()
    const {method} = req;
    if (method == "GET") {
        const id = req.query.id
        const result = await Messages.find({userID:id})
        res.json(result)
    }
    if(method == "POST"){
        const data = req.body
        console.log('data', data)
        const date = LocalDate()
        const time = LocalTime()
        const result = await Messages.create({
            'userID': data.userID,
            'userType': 'صاحب بار',
            'date': date,
            'time': time,
            'importance': data.importance,
            'relatedUnit': data.relatedUnit,
            'Messages': [{
                text: data.message,
                type: 'Q'
            }]
        })
        if(result){
            res.json(true)
        } else {
            res.json(false)
        }
    }
    if(method == "PATCH"){
        const data = req.body
        const item = await Messages.findOne({_id: data.messageID})
        console.log('data', data)
        let messages;
        let result;
        if(item){
            messages = item.Messages
            messages.push({
                'text': data.message,
                'type': 'Q'
            })
            console.log('messages', messages)
            result = await Messages.updateOne({_id: data.messageID}, {
                'Messages': messages
            })
            if(result){
                res.json(true)
            } else {
                res.json(false)
            }
        }
    }
}