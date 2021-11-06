import { QueryClient, QueryClientProvider as Provider } from "react-query";

const queryClient = new QueryClient();

export const QueryClientProvider = (props: { children: React.ReactNode }) => (
  <Provider client={queryClient}>{props.children}</Provider>
);
