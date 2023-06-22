export interface IElectronAPI {
    saveFile: (data: any) => Promise<boolean>
    readFile: (data: any) => Promise<string | undefined>
    fileExists: (data: string) => Promise<boolean>
}

declare global {
  interface Window {
    electronAPI: IElectronAPI
  }
}
