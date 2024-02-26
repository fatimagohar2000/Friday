import { NextFunction, Request, Response } from 'express'
import { exec } from 'child_process' 
import ExitNameResolver from '../../Helpers/ExitNameResolver'

const CloseApps = (req: Request, _: Response, next: NextFunction) => {
    if (req.body.intent === 'CLOSEAPPS') {
        const resolvedName = ExitNameResolver(req.body.target)
        console.log(resolvedName)
        exec(`taskkill /f /im ${resolvedName}`, (err) => {
            if (err) throw err
        })
        req.body.res = `App Closed, Sir!`
    }
    next()
}

export default CloseApps