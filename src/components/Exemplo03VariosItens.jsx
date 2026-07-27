// Elementos necessários para o componente
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'

// Estilos de "CSS"
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

  // Variável que vai armazenar a lista recebida
  const [resultado, setResultado] = useState(<Text>A lista de usuários aparecerá aqui no lugar deste texto</Text>)

  // Função que vai carregar a lista do endereço listado.
  async function carregarLista() {
    // 1ª etapa: Enviar requisição
    await fetch(
      'https://jsonplaceholder.typicode.com/users/',
      { method: 'GET', }
    )
    // 2ª etapa: Receber e tratar a resposta
    .then((resposta) => {
      if (!resposta.ok) {
        throw new Error(`Erro na requisição! Status: ${resposta.status}`);
      }
      return resposta.json()
    })
    // 3ª etapa: Usar o resultado
    .then((resultado) => {
      // Aqui como se trata de uma lista de usuários, usaremos um método
      // chamado "map", que funciona como um loop de "for item in lista"
      const listaDeUsuarios = <View>
        {resultado.map((conteudo) => {
          return <View style={estilo.dados}>
            <Text>Nome: {conteudo.name}</Text>
            <Text>Email: {conteudo.email}</Text>
            <Text>Site: {conteudo.website}</Text>
          </View>
        })}
      </View>

      // Jogamos o valor da lista de itens a serem exibidos para
      // a variável de estado "lista"
      setResultado(listaDeUsuarios)
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
        Carregue a lista de usuários abaixo:
      </Text>
      <Pressable style={estilo.botao} onPress={() => carregarLista()}>
        <Text style={estilo.textoBotao}>Carregar usuário</Text>
      </Pressable>
      {resultado}
    </View>
  )
}
