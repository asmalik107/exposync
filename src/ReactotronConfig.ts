import reactotronZustand from 'reactotron-plugin-zustand';
import Reactotron from 'reactotron-react-native';
import { QueryClientManager, reactotronReactQuery } from 'reactotron-react-query';
import { queryClient } from 'src/services/queryClient';

import { useTestStore } from './app/(app)/(tabs)';

const queryClientManager = new QueryClientManager({
  // @ts-ignore
  queryClient,
});

Reactotron.configure({ name: 'ExpoSync' })
  .use(reactotronZustand({ stores: [{ name: 'test', store: useTestStore }] }))
  .use(reactotronReactQuery(queryClientManager))
  .configure({
    onDisconnect: () => {
      queryClientManager.unsubscribe();
    },
  })
  .useReactNative({
    networking: {
      ignoreUrls: /symbolicate/,
    },
  })
  .connect();
