/*
  * ATIVIDADE 04: TRATAR ERROS DE MUITOS
  *
  * Crie e exporte por padrão um componente chamado Atv04TratarErrosDeMuitos, 
  * que deve ter uma <View>, e dentro desta <View> um <Pressable> com o 
  * conteúdo "Clique abaixo para carregar uma atividade", que quando 
  * pressionado fará uma requisição usando "fetch" para a URL abaixo:
  *
  * https://jsonplaceholder.typicode.com/comments
  *
  * Esta URL envia uma lista de objetos JSON, cada um com as propriedades:
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
  * Dentro de um elemento <View> abaixo do <Pressable>, cada item será
  * exibido dentro de sua própria <View> com o conteúdo abaixo:
  * <Text>[postId]: [id] - [email]</Text>
  * <Text>[name]</Text>
  * <Text>[body]</Text>
  * Os colchetes indicam que deve se tratar de uma variável, e não
  * do texto dentro deles.
  */


import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'

const estilos = StyleSheet.create({
  caixaPrincipal: {
    backgroundColor: '#e8f5e9',
    padding: 16,
    margin: 15,
    borderRadius: 12,
  },

  botaoCarregar: {
    backgroundColor: '#2e7d32',
    padding: 12,
    marginTop: 10,
    borderRadius: 8,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  listaComentarios: {
    marginTop: 15,
  },

  comentario: {
    backgroundColor: '#c8e6c9',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
  },

  texto: {
    fontSize: 14,
    marginBottom: 4,
  },
})

export default function Atv04TratarErrosDeMuitos() {
  const [comentarios, setComentarios] = useState([])

  const buscarComentarios = () => {
    fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'GET',
    })
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error(
            `Erro ao buscar os comentários. Status: ${resposta.status}`
          )
        }

        return resposta.json()
      })
      .then((dados) => {
        console.log(dados)
        setComentarios(dados)
      })
      .catch((erro) => {
        console.log('Erro:', erro)
      })
  }

  return (
    <View style={estilos.caixaPrincipal}>

      <Text>
        Clique abaixo para carregar várias atividades
      </Text>

      <Pressable
        style={estilos.botaoCarregar}
        onPress={buscarComentarios}
      >
        <Text style={estilos.textoBotao}>
          Buscar comentários
        </Text>
      </Pressable>

      <View style={estilos.listaComentarios}>
        {comentarios.map((comentario) => (
          <View
            key={comentario.id}
            style={estilos.comentario}
          >
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
        ))}
      </View>

    </View>
  )
}

