import { NextFunction, Request, Response } from "express"
import robot from 'robotjs'

const MediaControls = (req: Request, _: Response, next: NextFunction) => {
    if (req.body.intent.includes('MEDIACONTROLS')) {
        switch (req.body.intent) {
            case 'MEDIACONTROLS_PLAY':
                robot.keyTap('audio_play')
                req.body.res = `Playing Media, Sir!`
                break
            case 'MEDIACONTROLS_PAUSE':
                robot.keyTap('audio_pause')
                req.body.res = `Media Paused, Sir!`
                break
            case 'MEDIACONTROLS_STOP':
                robot.keyTap('audio_stop')
                req.body.res = `Media Stopped, Sir!`
                break
            default:
                req.body.res = `Unexpected error occured, Sir!`
                break;
        }
    }
    next()
}

export default MediaControls