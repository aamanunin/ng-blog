export interface IEnvironment {
  production: boolean;
  apiKey: string;
}

export interface IFbAuthResponse {
  idToken: string;
  expiresIn: string;
}
