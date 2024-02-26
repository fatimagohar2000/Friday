import { WinAppNames } from "../Consts/AppNames"

const NameResolver = (target: string): string => {
    const name = target.toLowerCase().replace(' ', '-')
    return WinAppNames[`${name}`]
}

export default NameResolver