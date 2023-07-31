export {};

declare global {
  //type Recordable<T = any, K = string> = Record<K extends null | undefined ? string : K, T>;

  type AxiosMethod = 'get' | 'post' | 'delete' | 'put' | 'GET' | 'POST' | 'DELETE' | 'PUT';
  // 请求返回的数据类型
  interface AxiosConfig {
    params?: unknown;
    data?: unknown;
    url?: string;
    method?: AxiosMethod;
    headersType?: string;
    responseType?: ResponseType;
  }
}
