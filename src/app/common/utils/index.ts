/*
 * @Descripttion: 
 * @Author: liufan
 * @Date: 2024-02-06 17:46:11
 * @LastEditors: liufan
 * @LastEditTime: 2024-03-28 16:53:14
 */
import { ipcRenderer } from 'electron';

interface IpcResponse<T> {
  data?: T;
  error?: any;
}

async function ipcInvoke<T = any>(target: string, ...args: any[]) {
  const response: IpcResponse<T> = await ipcRenderer.invoke(target, ...args);

  if (response.hasOwnProperty('error')) {
    throw response
  }

  return response
}


export function sendMsgToMainProcess(msg: string) {
  return ipcInvoke<string>('send-msg', msg)
}

