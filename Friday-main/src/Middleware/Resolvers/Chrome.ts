import robot from 'robotjs'
import { NextFunction, Request, Response } from "express";
import GetActiveWindow from '../../Helpers/ActiveWindow';

const Chrome = async (req: Request, _: Response, next: NextFunction) => {
    if (req.body.intent.includes(`CHROME`)) {
        const activeWin = await GetActiveWindow()
        if (activeWin === 'chrome.exe') {
            switch (req.body.intent) {
                case 'CHROME_NEWTAB':
                    robot.keyToggle('control', 'down')
                    robot.keyTap('t')
                    robot.keyToggle('control', 'up')                    
                    req.body.res = `New tab opened, Sir!`
                    break;
                case `CHROME_RELOAD`:
                    robot.keyTap('f5')
                    break
                default:
                    break;
            }
        } else {
            req.body.res = `Chrome isn't open sir!`
        }
    }
    next()
}

export default Chrome