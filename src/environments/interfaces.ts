export interface IEnvironment {
  production: boolean;
  apiKey: string;
  fbDbUrl: string;
}

export interface IFbAuthResponse {
  idToken: string;
  expiresIn: string;
}
