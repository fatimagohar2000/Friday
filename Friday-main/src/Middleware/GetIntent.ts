import { Request, NextFunction } from "express"
import { WitClient } from "../Helpers/Wit"

// Redis
import RedisClient from "../Helpers/Redis"

const GetIntent = async (req: Request, _: any, next: NextFunction) => {
    RedisClient.get(`TARGET:${req.body.Body.toLowerCase()}`, (err, data) => {
        if (err) console.error(err)
        req.body.target = data
    })
    RedisClient.get(`INTENT:${req.body.Body.toLowerCase()}`, async (err, data) => {
        if (err) console.error(err)
        if (data) {            
            req.body.intent = data;
            console.log(req.body.intent)
            next()
        } else {
            const result = await WitClient.message(req.body.Body, {})
            console.log(result)
            req.body.intent = result?.intents[0] !== undefined ? result.intents[0].name : ``
            req.body.target = result.entities['TARGET:TARGET'] ? result.entities['TARGET:TARGET'][0].value : undefined
            RedisClient.SET(`INTENT:${req.body.Body.toLowerCase()}`, req.body.intent)
            RedisClient.SET(`TARGET:${req.body.Body.toLowerCase()}`, req.body.target)
            next()
        }
    })
}

export default GetIntent