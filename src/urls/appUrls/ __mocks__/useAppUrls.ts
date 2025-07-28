import { IAppUrlsContext } from '@urls/types';

export function useAppUrls(): IAppUrlsContext {
  return {
    appUrls: {
      Transactions: {
        salesOrders: {
          url: '/SalesOrder',
          name: 'Sales Orders MOCK',
        },
      }
    },
  };
}

// export const useAppUrls = vi.fn((): IAppUrlsContext => ({appUrls: {
//     Transactions: {
//       salesOrders: {
//         url: '/SalesOrder',
//         name: 'Sales Orders MOCK',
//       },
//     }
//   }}));
