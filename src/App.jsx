import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import Exemplo01Fetch from './components/Exemplo01FetchSemComentarios';
import Exemplo02Tratamento from './components/Exemplo02TratamentoSemComentarios';
import Exemplo03VariosItens from './components/Exemplo03VariosItensSemComentarios';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Exemplo01Fetch/>
        <Exemplo02Tratamento/>
        <Exemplo03VariosItens/>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eec",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#101015"
  }
});
