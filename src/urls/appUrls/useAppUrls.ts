import { IAppUrlsContext } from '@urls/types';

// export const AppUrlsContext = createContext<IAppUrlsContext>({} as IAppUrlsContext);

export function useAppUrls(): IAppUrlsContext {
  // throw new Error ('NOT CALLING THE MOCK!!!!');
  // return useContext(AppUrlsContext);
  return {
    appUrls: {
      Transactions: {
        salesOrders: {
          url: '/SalesOrder',
          name: 'Sales Orders',
        },
      }
    },
  };
}
