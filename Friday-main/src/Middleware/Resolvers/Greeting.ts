import { NextFunction, Request, Response } from "express";
import batteryLvl from 'battery-level'
import board from "../../Helpers/Board";

const Greeting = async (req: Request, _: Response, next: NextFunction) => {
    if (req.body.intent === 'GREETING') {
        const lvl = await batteryLvl() * 100
        req.body.res = `Welcome Back, Sir!\nToday's Date: ${new Date().toLocaleDateString()}\nCurrrent Time: ${new Date().toLocaleTimeString()}\nCurrent Battery Percentage: ${lvl}\nStatus of Hardware functions: ${board.isReady ? `Available` : `Unavailable`}`
    }
    next()
}

export default Greeting