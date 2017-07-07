export class RwFavorite {
  
  coinId: number;
  userId: number;
  
  public setFields(coinId: number, userId: number) {
    this.coinId = coinId;
    this.userId = userId;
  }
}
