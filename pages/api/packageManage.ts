import { mongooseConnect } from "@/lib/mongoos";

export default async function handler(req: any, res: any) {
    await mongooseConnect();
    const { method } = req;
    if (method == "GET") {
    }
    if(method == "POST"){
        const data = req.body
        console.log('data', data)
        let duration;
        if(data.duration == 'monthly'){
            duration = 30;
        } else if(data.duration == 'weekly'){
            duration = 7;
        }
        if(data.walletPay){

        } 
        if(data.payAmount){
            
        }
    }
}