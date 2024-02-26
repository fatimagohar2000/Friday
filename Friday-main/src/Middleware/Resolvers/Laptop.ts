import { exec } from 'child_process';
import { NextFunction, Request, Response } from 'express-serve-static-core'

const Laptop = (req: Request, _: Response, next: NextFunction) => {
    if (req.body.intent.includes('LAPTOP')) {
        switch (req.body.target) {
            case 'lock':
                exec('Rundll32.exe user32.dll,LockWorkStation', (err) => {if (err) throw err})
                req.body.res = `Laptop Secured, Sir!`
                break;
            case 'hibernate':
                exec('shutdown /h', (err) => { if (err) throw err })
                req.body.res = `Goodbye! Sir.`
                break
            default:
                req.body.res = `Security alert, Unable to perform the required action.`
                break;
        }
    }
    next()
}

export default Laptop