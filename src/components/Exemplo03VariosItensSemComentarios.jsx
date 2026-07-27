import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'

const estilo = StyleSheet.create({
  usuario: {
    backgroundColor: "#8c8",
    padding: "10px",
    borderRadius: "10px",
    margin: "20px",
  },
  dados: {
    backgroundColor: "#6a6",
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

export default function Exemplo03VariosItens() {

  const [resultado, setResultado] = useState(<Text>A lista de usuários aparecerá aqui no lugar deste texto</Text>)

  async function carregarLista() {
    await fetch(
      'https://jsonplaceholder.typicode.com/users/',
      { method: 'GET', }
    )
    .then((resposta) => {
      if (!resposta.ok) {
        throw new Error(`Erro na requisição! Status: ${resposta.status}`);
      }
      return resposta.json()
    })
    .then((resultado) => {
      console.log(resultado)
      
      const listaDeUsuarios = <View>
        
        {resultado.map((conteudo) => {
          return <View style={estilo.dados}>
            <Text>Nome: {conteudo.name}</Text>
            <Text>Email: {conteudo.email}</Text>
            <Text>Site: {conteudo.website}</Text>
          </View>
        })}
        
      </View>

      setResultado(listaDeUsuarios)
    })
    .catch(error => {
      console.log("Erro: ", error)
    })
  }

  return(
    <View style={estilo.usuario}>
      <Text>
        Carregue a lista de usuários abaixo:
      </Text>
      <Pressable style={estilo.botao} onPress={() => carregarLista()}>
        <Text style={estilo.textoBotao}>Carregar usuário</Text>
      </Pressable>
      {resultado}
    </View>
  )
}
