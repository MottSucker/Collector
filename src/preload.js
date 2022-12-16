<<<<<<< HEAD
const { contextBridge, ipcRenderer } = require('electron')
const os = require('os');
const process = require('process');

contextBridge.exposeInMainWorld('electronAPI', {

});
=======
window.addEventListener("DOMContentLoaded", () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector);
        if (element) element.innerText = text;
    };

    for (const type of ["chrome", "node", "electron"]) {
        replaceText(`${type}-version`, process.versions[type]);
    }
});
>>>>>>> origin/michael/centipedes
