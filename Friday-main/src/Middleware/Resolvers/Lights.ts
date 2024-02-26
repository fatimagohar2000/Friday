import { Request, NextFunction, Response } from "express"
import board from "../../Helpers/Board"

const Lights = (req: Request, _: Response, next: NextFunction) => {
    if (req.body.intent === 'LIGHTS') {
        if(board.isReady) {
            switch (req.body.target) {
                case 'ON':
                    board.digitalWrite(4, 0)
                    req.body.res = `Turning on lights, Sir!`
                    break;
                case 'OFF':
                    board.digitalWrite(4, 1)
                    req.body.res = `Turning off lights, Sir!`
                    break
                default:
                    break;
            }
        }
    }
    next()
}

export default Lights