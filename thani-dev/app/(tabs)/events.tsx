import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function EventsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Events</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>Upcoming club events will appear here!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
});
