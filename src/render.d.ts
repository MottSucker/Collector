export interface IElectronAPI {
  saveFile: (data: any) => Promise<boolean>
  readFile: (data: any) => Promise<string | undefined>
}

declare global {
  interface Window {
    electronAPI: IElectronAPI
  }
}
