import { filterObjectKeys } from '../../libs/object-util';
import {
  IConfig,
  IInterceptors,
  IParams,
  IRequestOptions,
  IURLAndParams,
  methodType,
} from './request.interface';
import Interceptor from './interceptor';

const CONNECTOR_OF_GET = '?';
const CONNECTOR_OF_KEY_VALUE = '=';
const CONNECTOR_OF_PARAMS = '&';
const ABSOLUTE_PREFIX = [
  'http://',
  'https://',
];

class Request {
  /**
   * Check url is absolute.
   * @param {string} url - URL for check.
   * @return {boolean} Is absolute URL.
   */
  static isAbsoluteURL(url: string): boolean {
    let isAbsolute = false;
    if (url && ABSOLUTE_PREFIX.some(prefix => url.startsWith(prefix))) isAbsolute = true;
    return isAbsolute;
  }

  readonly options: IRequestOptions;
  public interceptors: IInterceptors;

  constructor(options: IRequestOptions = {}) {
    this.options = options;
    this.interceptors = {
      request: new Interceptor(),
      response: new Interceptor(),
    }
  }

  private serializeParams(params: IParams): string {
    return Object.entries(params)
                 .map(keyAndValue => keyAndValue.join(CONNECTOR_OF_KEY_VALUE))
                 .join(CONNECTOR_OF_PARAMS);
  }

  private getUrlAndParamsByMethod(method: methodType, url: string, params?: IParams): IURLAndParams {
    const { baseURL } = this.options;
    const result: IURLAndParams = { url: (baseURL && !Request.isAbsoluteURL(url)) ? baseURL + url : url };
    if (params) params = filterObjectKeys(params, (key, value) => value !== undefined);
    result.params = params
    return result;
  }

  private send<T>(method: methodType, url: string, params?: IParams, config: IConfig = {}): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { url: urlParsed, params: paramsParsed } = this.getUrlAndParamsByMethod(method, url, params);
      const header = {
        'Content-Type': 'application/json',
        ...config?.headers,
      };
      
      const requestOptions = {
        url: urlParsed,
        data: paramsParsed,
        method,
        header,
      };
      console.log('requestOptions', requestOptions);
      const realOptions = this.interceptors.request.reduce(requestOptions);
      uni.request(realOptions)
        .then((response) => {
          const { statusCode, data } = response;
          if (statusCode === 200 && data.status === 200) {
            const result = this.interceptors.response.reduce(data);
            resolve(result as T);
          } else {
            const result = this.interceptors.response.reduce(data, false);
            reject(result);
          }
        });
    });
  }

  public get<T>(url: string, params?: IParams, config?: IConfig) {
    return this.send<T>('GET', url, params, config);
  }

  public post<T>(url: string, params?: IParams, config?: IConfig) {
    return this.send<T>('POST', url, params, config);
  }
}

export default Request;
