import React from 'react';
import { QueryClient, QueryClientProvider as ReactQueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const QueryClientProvider = ({ children }: { children: React.ReactNode }) => (
  <ReactQueryClientProvider client={queryClient}>{children}</ReactQueryClientProvider>
);

export default QueryClientProvider;
