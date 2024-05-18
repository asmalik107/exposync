import { Pressable, Text, View } from 'react-native';
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

  const username = storage.getString('user.name'); // 'Marc'
  const age = storage.getNumber('user.age'); // 21
  const isMmkvFastAsf = storage.getBoolean('is-mmkv-fast-asf'); // true

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
      <Text>{username}</Text>
      <Text>{age}</Text>
      <Text>{isMmkvFastAsf}</Text>
      <Pressable onPress={increaseCount}>
        <Text>Count: {count}</Text>
      </Pressable>
    </View>
  );
}
