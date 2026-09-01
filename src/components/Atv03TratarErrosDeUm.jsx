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

const estilos = StyleSheet.create({
  tela: {
    backgroundColor: '#fff3e0',
    padding: 18,
    margin: 15,
    borderRadius: 12,
  },

  botao: {
    backgroundColor: '#ef6c00',
    padding: 12,
    marginTop: 10,
    borderRadius: 7,
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  informacoes: {
    backgroundColor: '#ffe0b2',
    padding: 12,
    marginTop: 15,
    borderRadius: 8,
  },

  texto: {
    fontSize: 15,
    marginBottom: 5,
  },
})

export default function Atv03TratarErrosDeUm() {
  const [comentario, setComentario] = useState(null)

  function buscarComentario() {
    fetch('https://jsonplaceholder.typicode.com/comments/20', {
      method: 'GET',
    })
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error(
            `Não foi possível realizar a requisição. Status: ${resposta.status}`
          )
        }

        return resposta.json()
      })
      .then((dados) => {
        console.log(dados)
        setComentario(dados)
      })
      .catch((erro) => {
        console.log('Erro encontrado:', erro)
      })
  }

  return (
    <View style={estilos.tela}>

      <Text>
        Clique abaixo para carregar uma atividade
      </Text>

      <Pressable
        style={estilos.botao}
        onPress={buscarComentario}
      >
        <Text style={estilos.botaoTexto}>
          Carregar atividade
        </Text>
      </Pressable>

      {comentario && (
        <View style={estilos.informacoes}>

          <Text style={estilos.texto}>
            {comentario.postId}: {comentario.id} - {comentario.email}
          </Text>

          <Text style={estilos.texto}>
            {comentario.name}
          </Text>

          <Text style={estilos.texto}>
            {comentario.body}
          </Text>

        </View>
      )}

    </View>
  )
}

