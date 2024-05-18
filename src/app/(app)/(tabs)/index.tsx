import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { MMKV } from 'react-native-mmkv';
import { create } from 'zustand';

interface TestStore {
  count: number;
  increaseCount: () => void;
  removeAll: () => void;
}

export const useTestStore = create<TestStore>((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  removeAll: () => set({ count: 0 }),
}));

export const storage = new MMKV();
storage.set('user.name', 'Marc');
storage.set('user.age', 21);
storage.set('is-mmkv-fast-asf', true);

export default function Index() {
  const count = useTestStore((state) => state.count);
  const increaseCount = useTestStore((state) => state.increaseCount);

  const { isPending, error, data, isFetching, isLoading, isError } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      axios.get('https://api.github.com/repos/tannerlinsley/react-query').then((res) => res.data),
  });

  const username = storage.getString('user.name'); // 'Marc'
  const age = storage.getNumber('user.age'); // 21
  const isMmkvFastAsf = storage.getBoolean('is-mmkv-fast-asf'); // true

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
      <Text>{username}</Text>
      <Text>{age}</Text>
      <Text>{isMmkvFastAsf}</Text>
      <Pressable onPress={increaseCount}>
        <Text>Count: {count}</Text>
      </Pressable>
      <Text>Loading: {isLoading}</Text>
      <Text>Error: {isError}</Text>
      <Text>Data: {JSON.stringify(data)}</Text>
    </ScrollView>
  );
}
