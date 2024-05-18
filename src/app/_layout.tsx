import { Slot } from 'expo-router';
import { SessionProvider } from 'src/providers/auth-context';

if (__DEV__) {
  require('../ReactotronConfig');
}

export default function Root() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
