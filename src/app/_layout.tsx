import { QueryClientProvider } from '@tanstack/react-query';
import { Slot } from 'expo-router';
import { SessionProvider } from 'src/providers/auth-context';
import { queryClient } from 'src/services/queryClient';

if (__DEV__) {
  require('../ReactotronConfig');
}

export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <Slot />
      </SessionProvider>
    </QueryClientProvider>
  );
}
