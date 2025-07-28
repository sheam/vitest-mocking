import { useAppUrls } from '@urls/appUrls/useAppUrls';

export function TestComponent(): string {
  const { appUrls } = useAppUrls();
  return `<LinkElement url="${appUrls.Transactions.salesOrders.url}" title="${appUrls.Transactions.salesOrders.name}" />`;
}
