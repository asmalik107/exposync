import reactotronZustand from 'reactotron-plugin-zustand';
import Reactotron from 'reactotron-react-native';

import { useTestStore } from './app/(app)/(tabs)';

Reactotron.configure({ name: 'ExpoSync' })
  .use(reactotronZustand({ stores: [{ name: 'test', store: useTestStore }] }))
  .useReactNative({
    networking: {
      ignoreUrls: /symbolicate/,
    },
  })
  .connect();
