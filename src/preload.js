const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    saveFile(data) {
        console.log("Invoking saveFile")
        return ipcRenderer.invoke('save-file', data)
    },
    readFile(data) {
        console.log("Invoking readFile")
        return ipcRenderer.invoke('read-file', data)
    }
})