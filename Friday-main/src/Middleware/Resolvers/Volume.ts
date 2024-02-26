import { NextFunction, Request, Response } from "express";
import Speaker from "../../Helpers/Speaker";

const Volume = (req: Request, _: Response, next: NextFunction) => {
    if (req.body.intent.includes('VOLUME')) {
        switch (req.body.intent) {
            case 'VOLUME_SET':
                Speaker.set(parseInt(req.body.target))
                req.body.res = `Volume level changed to: ${Speaker.get()}`
                break;
            case 'VOLUME_UP':
                Speaker.increase(parseInt(req.body.target) > 0 ? parseInt(req.body.target) : 2)
                req.body.res = `Volume level changed to: ${Speaker.get()}`
                break
            case 'VOLUME_DOWN':
                Speaker.decrease(parseInt(req.body.target)> 0 ? parseInt(req.body.target) : 2)
                req.body.res = `Volume level changed to: ${Speaker.get()}`
                break
            case `VOLUME_TOGGLE`:
                Speaker.toggle()
                req.body.res = `Speaker ${Speaker.isMuted() ? `muted` : `unmuted`}, Sir!`
                break
            default:
                req.body.res = `Sorry Sir, I was not able to change the volume`
                break;
        }
    }
    next()
}

export default Volume