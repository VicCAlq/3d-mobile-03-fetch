import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'

const estilo = StyleSheet.create({
  usuario: {
    backgroundColor: "#8ac",
    padding: "10px",
    borderRadius: "10px",
    margin: "20px",
  },
  dados: {
    backgroundColor: "#68a",
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

export default function Exemplo02Tratamento() {

  const [resultado, setResultado] = useState(<Text>O usuário aparecerá aqui no lugar deste texto</Text>)

  /*
  assíncronamente PegaEssesDadosAqui()
  .então(traduzEles SE estiverem joinha)
  .então(VamosUsarElesNoSite)
  .masSeDerRuim(MeAvisaPfv)
  */


  async function carregarUsuario() {
    await fetch(
      'https://jsonplaceholder.typicode.com/users/1',
      { method: 'GET', }
    )
    .then((resposta) => {
      if (!resposta.ok) {
        throw new Error(`Erro na requisição! Status: ${resposta.status}`);
      }
      return resposta.json()
    })
    .then((resultado) => {
      const usuario = <View style={estilo.dados}>
        <Text>Nome: {resultado.name}</Text>
        <Text>Email: {resultado.email}</Text>
        <Text>Site: {resultado.website}</Text>
      </View>

      setResultado(usuario)
    })
    .catch((erro) => {
      console.log("Erro: ", erro)
    })
  }

  return(
    <View style={estilo.usuario}>
      <Text>
        Carregue o usuário abaixo:
      </Text>
      <Pressable style={estilo.botao} onPress={() => carregarUsuario()}>
        <Text style={estilo.textoBotao}>Carregar usuário</Text>
      </Pressable>
      {resultado}
    </View>
  )
}
