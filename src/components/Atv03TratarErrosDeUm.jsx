/*
  * ATIVIDADE 03: TRATAR ERROS DE UM
  *
  * Crie e exporte por padrão um componente chamado Atv03TratarErrosDeUm, que deve ter
  * uma <View>, e dentro desta <View> um <Pressable> com o conteúdo 
  * "Clique abaixo para carregar uma atividade", que quando pressionado
  * fará uma requisição usando "fetch" para a URL abaixo:
  *
  * https://jsonplaceholder.typicode.com/comments/20
  *
  * Esta URL envia um objeto JSON com as propriedades:
  * postId: número inteiro
  * id: número inteiro
  * name: texto
  * email: texto
  * body: texto
  *
  * Ao receber este conteúdo, você deve tratar ele dentro do primeiro ".then"
  * para verificar se existe um "ok" dentro da resposta, e tratar por erros
  * de requisição após o segundo ".then" dentro de um ".catch".
  *
  * No segundo ".then" o valor recebido deve ser exibido da forma abaixo:
  * Dentro de um elemento <View> abaixo do <Pressable>:
  * <Text>[postId]: [id] - [email]</Text>
  * <Text>[name]</Text>
  * <Text>[body]</Text>
  * Os colchetes indicam que deve se tratar de uma variável, e não
  * do texto dentro deles.
  */


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

export default function Atv03TratarErrosDeUm() {

  // Variável que vai armazenar a lista recebida
  const [resultado, setResultado] = useState(<Text>A lista de usuários aparecerá aqui no lugar deste texto</Text>)

  // Função que vai carregar a lista do endereço listado.
  async function carregarLista() {
    // 1ª etapa: Enviar requisição
    await fetch(
      'https://jsonplaceholder.typicode.com/comments/20',
      { method: 'GET', }
    )
    // 2ª etapa: Receber e tratar a resposta
    .then((resposta) => {
      return resposta.json()
    })
    // 3ª etapa: Usar o resultado
    .then((resultado) => {
      // Aqui como se trata de uma lista de usuários, usaremos um método
      // chamado "map", que funciona como um loop de "for item in lista"
      
        
      setResultado(<View style={estilo.dados}>
        <Text>{resultado.postId}: {resultado.id} - {resultado.email}</Text>
        <Text>{resultado.name}</Text>
          <Text>{resultado.body}</Text>
        
      </View>)
    })
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
  

