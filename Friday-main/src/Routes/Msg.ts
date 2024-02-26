import { Router, Request, Response } from 'express'
import twilio from 'twilio'

const router = Router()

// Middleware Imports
import GetIntent from '../Middleware/GetIntent'
import Greeting from '../Middleware/Resolvers/Greeting'
import Lights from '../Middleware/Resolvers/Lights'
import OpenSite from '../Middleware/Resolvers/OpenSite'
import OpenApps from '../Middleware/Resolvers/OpenApp'
import CloseApps from '../Middleware/Resolvers/CloseApp'
import Volume from '../Middleware/Resolvers/Volume'
import Chrome from '../Middleware/Resolvers/Chrome'
import MediaControls from '../Middleware/Resolvers/MediaControls'
import Files from '../Middleware/Resolvers/Files'
import Laptop from '../Middleware/Resolvers/Laptop'

router.post('/', [
    GetIntent,
    Greeting,
    OpenSite,
    OpenApps,
    CloseApps,
    Volume,
    Chrome,
    MediaControls,
    Files,
    Laptop,
    Lights
], (req: Request, res: Response) => {
    const twiml = new twilio.twiml.MessagingResponse()
    twiml.message(req.body.res !== `` ? req.body.res : `Sorry Sir, I was not able to process your request`)
    res.writeHead(200, {'Content-Type': 'text/xml'})
    res.end(twiml.toString())
})

export default router