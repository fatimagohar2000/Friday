import path from 'path'
import fs from 'fs'
import { promisify } from 'util'
import { Paths } from '../Consts/Paths'

const resolvePath = (name: string): (string | undefined) => {
    const tempName = name.toLowerCase().replace(' ', '-')
    const path = Paths[`${tempName}`]   
    return path ? path : undefined
}

const readDirAsync = promisify(fs.readdir)

const ReadDirs = async (pathName: string): Promise<string[] | undefined> => {
    const resolvedPath = resolvePath(pathName)
    console.log(resolvedPath)
    const directoryPath = path.join(process.env.DIRNAME ? process.env.DIRNAME : ``, `${resolvedPath ? resolvedPath : pathName}`);
    console.log(directoryPath)
    try {
        const files = await readDirAsync(directoryPath)
        files.push('All files sent, Sir!')
        console.log(files)
        return files        
    } catch (error) {
        console.log(error.message)
        return undefined
    }
}

export default ReadDirs