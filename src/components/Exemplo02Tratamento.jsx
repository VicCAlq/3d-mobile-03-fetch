// Elementos necessários para o componente
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'

// Estilos de "CSS"
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

  // Variável que vai armazenar a lista recebida
  const [resultado, setResultado] = useState(<Text>O usuário aparecerá aqui no lugar deste texto</Text>)

  // Função que vai carregar a lista do endereço listado.
  async function carregarUsuario() {
    // 1ª etapa: Enviar requisição
    // "fetch" é a função que envia uma mensagem para um endereço.
    await fetch(
      // Este é o endereço a ser acessado
      'https://jsonplaceholder.typicode.com/users/1',
      // Aqui definimos o método da requisição
      { method: 'GET', }
    )
    // 2ª etapa: Receber e tratar a resposta
    .then((resposta) => {
      // Se a resposta não tiver um valor "ok", anunciamos um erro
      if (!resposta.ok) {
        throw new Error(`Erro na requisição! Status: ${resposta.status}`);
      }
      // Se não der erro, convertemos o resultado para JavaScript
      return resposta.json()
    })
    // 3ª etapa: Usar o resultado
    .then((resultado) => {
      const usuario = <View style={estilo.dados}>
        <Text>Nome: {resultado.name}</Text>
        <Text>Email: {resultado.email}</Text>
        <Text>Site: {resultado.website}</Text>
      </View>

      // Jogamos o valor da lista de itens a serem exibidos para
      // a variável de estado "resultado"
      setResultado(usuario)
    })
    // Se houverem erros mais severos, estes são tratados na função de
    // "catch" abaixo:
    .catch(error => {
      console.log("Erro: ", error)
    })
  }

  // Parte visual do componente
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
