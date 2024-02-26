import { ExitWinAppNames } from "../Consts/AppNames"

const ExitNameResolver = (target: string): string => {
    const name = target.toLowerCase().replace(' ', '-')
    return ExitWinAppNames[`${name}`] 
}

export default ExitNameResolver