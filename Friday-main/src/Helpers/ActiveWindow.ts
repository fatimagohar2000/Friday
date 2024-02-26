import activeWin from 'electron-active-window'

const GetActiveWindow = async (): Promise<string> => {
    const activeWindow = await activeWin().getActiveWindow()
    console.log(activeWindow.windowClass.toLowerCase())
    return activeWindow.windowClass.toLowerCase()
}

export default GetActiveWindow