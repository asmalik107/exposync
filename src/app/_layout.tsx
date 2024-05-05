import { Slot } from 'expo-router';
import { SessionProvider } from 'src/providers/auth-context';

export default function Root() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
