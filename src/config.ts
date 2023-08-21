import got, { Options } from 'got';

export interface IConfiguration {
  requestOptions?: Options;
}

export let request: typeof got = got.extend({ followRedirect: false, rejectUnauthorized: false, throwHttpErrors: false, retry: 0 });

export function setup(config: IConfiguration): void {
  if (config.requestOptions) {
    request = request.extend(config.requestOptions);
  }
}

// let request = {
//   async post(url, {headers, body, resolveBodyOnly, form}) {
//     return {
//       json
//     }
//   }
// }