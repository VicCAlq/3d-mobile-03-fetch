import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'

const estilo = StyleSheet.create({
  usuario: {
    backgroundColor: "#dac",
    padding: "10px",
    borderRadius: "10px",
    margin: "20px",
  },
  dados: {
    backgroundColor: "#b78",
    padding: "5px",
    borderRadius: "5px",
    margin: "10px",
  },
  textoBotao: {
    color: "#eee",
    fontSize: "16px",
  },
  botao: {
    borderRadius: "5px",
    backgroundColor: "#505560",
    padding: "10px",
    margin: "10px",
  },
})

export default function Exemplo01Fetch() {

  const [resultado, setResultado] = useState(<Text>O usuário aparecerá aqui no lugar deste texto</Text>)


  /*
  PegaEssesDadosAqui()
  .então(traduzEles)
  .então(VamosUsarElesNoSite)
  */


  async function carregarLista() {
    await fetch(
      'https://jsonplaceholder.typicode.com/users/1',
      { method: 'GET', }
    )
    .then((resposta) => {
      console.log(resposta)
      return resposta.json()
    })
    .then((resultado) => {
      console.log(resultado)

      const usuario = <View style={estilo.dados}>
        <Text>Nome: {resultado.name}</Text>
        <Text>Email: {resultado.email}</Text>
        <Text>Site: {resultado.website}</Text>
        <Text>Telefone: {resultado.phone}</Text>
      </View>

      setResultado(usuario)
    })
  }

  return(
    <View style={estilo.usuario}>
      <Text>
        Carregue o usuário abaixo:
      </Text>
      <Pressable style={estilo.botao} onPress={() => carregarLista()}>
        <Text style={estilo.textoBotao}>Carregar usuário</Text>
      </Pressable>
      {resultado}
    </View>
  )
}
