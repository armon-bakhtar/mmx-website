import { setCookie, parseCookies, destroyCookie } from 'nookies';
import * as next from 'next';

export enum WebSecureStorageKeys {
  Cookie = 'web.cookie',
}

class SecureStorageService {
  getItem(key: WebSecureStorageKeys, ctx?: ParseContext): string | undefined {
    return parseCookies(ctx)[key];
  }

  setItem(key: WebSecureStorageKeys, value: string, ctx?: Context) {
    return setCookie(ctx, key, value);
  }

  removeItem(key: WebSecureStorageKeys, ctx?: Context) {
    return destroyCookie(ctx, key);
  }
}

type Context =
  | Pick<next.NextPageContext, 'res'>
  | {
      res: next.NextApiResponse;
    }
  | null
  | undefined;

type ParseContext =
  | Pick<next.NextPageContext, 'req'>
  | {
      req: next.NextApiRequest;
    }
  | null
  | undefined;

export default new SecureStorageService();
