import { View, Text } from 'react-native';
import { useSession } from 'src/providers/auth-context';

export default function Tab() {
  const { signOut } = useSession();

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text
        onPress={() => {
          signOut();
        }}>
        Sign Out
      </Text>
    </View>
  );
}
