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

  interface MenuOptions {
    path: string;
    name: string;
    component?: string | (() => Promise<unknown>);
    redirect?: string;
    meta: MetaProps;
    children?: MenuOptions[];
  }
  interface MetaProps {
    icon: string;
    title: string;
    activeMenu?: string;
    isLink?: string;
    isHide: boolean;
    isFull: boolean;
    isAffix: boolean;
    isKeepAlive: boolean;
  }
}
