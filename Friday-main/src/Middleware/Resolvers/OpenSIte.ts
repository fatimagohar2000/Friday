import { NextFunction, Request, Response } from 'express'
import open from 'open'

const OpenSite = async (req: Request, _: Response, next: NextFunction) => {
    if (req.body.intent === 'OPENSITE') {
        try {
            await open(`https://${req.body.target}`)
            req.body.res = `Site Opened, Sir!`
        } catch (err) {
            console.log(err.message)
            req.body.res = `Sir! I wasn't able to open the site.`
        }
    }
    next()
}

export default OpenSite