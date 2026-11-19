const {contextBridge,ipcRenderer}=require('electron');contextBridge.exposeInMainWorld('meter',{sample:()=>ipcRenderer.invoke('sample')});
