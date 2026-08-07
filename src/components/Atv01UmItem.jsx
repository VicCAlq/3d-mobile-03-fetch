/*
  * ATIVIDADE 01: UM ITEM
  *
  * Crie e exporte por padrão um componente chamado Atv01UmItem, que deve ter
  * uma <View>, e dentro desta <View> um <Pressable> com o conteúdo
  * "Clique abaixo para carregar uma atividade", que quando pressionado
  * fará uma requisição usando "fetch" para a URL abaixo:
  *
  * https://jsonplaceholder.typicode.com/todos/1
  *
  * Esta URL envia um objeto JSON com as propriedades:
  * userId: número inteiro
  * id: número inteiro
  * title: texto
  * completed: booleano
  *
  * Ao receber este conteúdo, ele deve ser exibido da seguinte forma
  * dentro de um elemento <Text> abaixo do <Pressable>:
  * [id] - [title]: [status]
  * Os colchetes indicam que deve se tratar de uma variável, e não
  * do texto dentro deles.
  * O valor de "status" deve ser "feito" se completed for true,
  * ou "a fazer" se completed for false
  */


import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'


// Estilos de "CSS"
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


export default function Atv01UmItem() {
   const [resultado, setResultado] = useState(<Text>O usuário aparecerá aqui no lugar deste texto</Text>)
 
    // Função que vai carregar os dados do endereço listado.
    // Como ela depende de um resultado que não depende apenas do
    // próprio programa, ela se trada de uma função "assíncrona"
    async function carregarUsuario() {
      // 1ª etapa: Enviar a requisição
      // "fetch" é a função que envia uma mensagem para um endereço.
      // O resultado de "fetch" é assíncrono: ele entrega uma "Promessa"
      // de resultado, que quando concluída tem seu resultado processado.
      await fetch(
        // Este é o endereço a ser acessado
        'https://jsonplaceholder.typicode.com/todos/1',
        // Aqui definimos o método da requisição
        { method: 'GET', }
      )
      // 2ª etapa: Tratar a resposta
      // O ".then" abaixo define código a ser executado quando o "fetch"
      // traz seu resultado. Ele traz o resultado em um formato que precisa
      // ser convertido para código JavaScript
      .then((resposta) => {
        // convertemos o resultado para JavaScript
        return resposta.json()
      })
      // 3ª etapa: Usar a resposta
      // O próximo ".then" é onde definimos o que fazer com o resultado
      // já processado do "fetch". Estamos aqui chamando o resultado de "resultado"
 
      .then((resultado) => {
        console.log(resultado)


        let feito = ""
        if (resultado.completed === true){
          feito = "feito"
        }
        else {
          feito = "a fazer"
        }
        // Aqui enviamos para o console do navegador. No site, aperte F12
        // e na janela que aparecer mude para a aba do "console"
        // para ver este resultado
        console.log(resultado)
 
        // O código abaixo vai organizar as informações recebidas em
        // elementos do React Native:
        const usuario = <View style={estilo.dados}>
          <Text> {resultado.id} - {resultado.title} : {feito}</Text>
        </View>
 
        // Jogamos o valor da lista de itens a serem exibidos para
        // a variável de estado "resultado"
        setResultado(usuario)
      })
    }
    return(
           <Pressable style={estilo.botao} onPress={() => carregarUsuario()}>
            <Text style={estilo.textoBotao}>Clique abaixo para carregar uma atividade</Text>
            {resultado}
          </Pressable>


    )
}
