import { Text, View } from 'react-native';
import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();
storage.set('user.name', 'Marc');
storage.set('user.age', 21);
storage.set('is-mmkv-fast-asf', true);

export default function Index() {
  const username = storage.getString('user.name'); // 'Marc'
  const age = storage.getNumber('user.age'); // 21
  const isMmkvFastAsf = storage.getBoolean('is-mmkv-fast-asf'); // true

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
      <Text>{username}</Text>
      <Text>{age}</Text>
      <Text>{isMmkvFastAsf}</Text>
    </View>
  );
}
