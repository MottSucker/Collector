const { contextBridge, ipcRenderer } = require('electron')
const os = require('os');
const process = require('process');

contextBridge.exposeInMainWorld('electronAPI', {

});