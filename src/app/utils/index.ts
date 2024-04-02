const { ipcRenderer } = require('electron');
// interface IpcResponse<T> {
//   data?: T;
//   error?: any;
// }

// async function ipcInvoke<T = any>(target: string, ...args: any[]) {
//   const response: IpcResponse<T> = await ipcRenderer.invoke(target, ...args);

//   if (response.hasOwnProperty('error')) {
//     throw response
//   }

//   return response
// }


// export function sendMsgToMainProcess(msg: string) {
//   return ipcInvoke<string>('send-msg', msg)
// }

require('reflect-metadata')


@Reflect.metadata('name', 'Person')
class Person {
  @Reflect.metadata('words', 'hello world')
  public speak(): string {
    return 'hello world'
  }
}
 
console.log('ts import ');
console.log(Reflect.getMetadata('name', Person));
console.log(Reflect.getMetadata('words', new Person(), 'speak'));


Reflect.getMetadata('name', Person) // 'Person'
Reflect.getMetadata('words', new Person(), 'speak') // 'hello world'