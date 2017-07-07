export class Api {
  
  apiKey: string;
  secretKey: string;
  exchangeName: string;
  userId: string;
  
  setApi(apiKey: string, secretKey: string, exchangeName: string, userId: string) {
    this.apiKey = apiKey;
    this.secretKey = secretKey;
    this.exchangeName = exchangeName;
    this.userId = userId;
  }
  
}
