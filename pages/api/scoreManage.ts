import { mongooseConnect } from "@/lib/mongoos";


export default async function handler(req: any, res: any) {
    await mongooseConnect();
    const { method } = req;

}