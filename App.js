import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileCard from './components/ProfileCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>My Profile App</Text>

        <ProfileCard
          name="Berkay Deniz"
          role="Network Specialist"
          imageSource={{ uri: 'https://media.licdn.com/dms/image/v2/D4D03AQGTJH0GvKuKBg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710336576705?e=1764201600&v=beta&t=sG8Ww-wf60ch83caAxmktQUebm9VzXfE0VyKg6zxnm0' }}
        />

        <ProfileCard
          name="Mehmet Taha Yılmaz"
          role="Computer Scientist"
          imageSource={{ uri: 'https://media.licdn.com/dms/image/v2/D5603AQHH1WamRpztOg/profile-displayphoto-shrink_800_800/B56ZNk.i91GgAc-/0/1732565939032?e=1764201600&v=beta&t=qpC79_LMAknjUw-u37Y62lk_oLdmfrYpfqPdirxCN4U' }}
        />

        <ProfileCard
          name="Göktuğ Varan"
          role="Erasmus+ and WAT"
          imageSource={{ uri: 'https://media.licdn.com/dms/image/v2/D5603AQGDWpc-9-Q5AQ/profile-displayphoto-shrink_800_800/B56ZNlSDkpG4Ac-/0/1732571053982?e=1764201600&v=beta&t=xMtVEmjvE8nV948F-Rxc1peZXSO3diU-Bh2B8eLLQEQ' }}
        />
        <ProfileCard
          name="Beril Güngör"
          role="Pharmacist"
          imageSource={{ uri: 'https://media.licdn.com/dms/image/v2/D4D03AQGBUjl1aiJ35A/profile-displayphoto-crop_800_800/B4DZijo2N4GsAI-/0/1755092052175?e=1764201600&v=beta&t=u_gF5XiT06te6uD1KlqCln_c8FKMx00Ub5IsdUxiAEc' }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
