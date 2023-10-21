import { IUser } from './entity.typs';

export interface ITokens {
  accessToken: string;
  accessExp: number;
  refreshToken?: string;
  refreshExp?: number;
}

export interface IUserWithTokens {
  user: IUser;
  tokens: ITokens;
}

export interface IResError {
  message: string | string[];
  error?: string;
  statusCode: number;
}
