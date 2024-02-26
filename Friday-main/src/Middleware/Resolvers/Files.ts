import { NextFunction, Request, Response } from "express"
import twilio from "twilio";
import ReadDirs from "../../Helpers/ReadDirs";


const client = twilio(process.env.AccountID, process.env.AuthToken)
const sendMsg = async (to: string, from: string, body: string) => {
    await client.messages.create({
        to,
        from,
        body
    })
}

const throttler = (to: string, from: string, files: string[]) => {
    let i = 0;
    const interval = setInterval(() => {
        if(i >= files.length - 1) clearInterval(interval)
        sendMsg(to, from, files[i++])
    }, 1000)
}

const Files = async (req: Request, _: Response, next: NextFunction) => {
    if (req.body.intent === 'FILES') {
        const files = await ReadDirs(req.body.target)
        console.log(req.body.From)
        console.log(files)
        if (files) throttler(req.body.From, req.body.To, files)
        req.body.res = files && files.length > 0 ? `Sending file names, Sir!` : `Sorry Sir, Provided directory was empty`
    }
    next()
}

export default Files