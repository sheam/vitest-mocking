export interface IAppUrls {
  Transactions: {
    salesOrders: {
      url: string;
      name: string;
    }
  }
}

export interface IAppUrlsContext {
  appUrls: IAppUrls;
}
