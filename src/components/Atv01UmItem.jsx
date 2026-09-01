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

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#e8f0fe',
    margin: 15,
    padding: 15,
    borderRadius: 12,
  },

  botao: {
    backgroundColor: '#3367d6',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  atividade: {
    backgroundColor: '#ffffff',
    marginTop: 15,
    padding: 12,
    borderRadius: 8,
  },

  texto: {
    fontSize: 16,
  },
})

export default function Atv01UmItem() {
  const [atividade, setAtividade] = useState(null)

  const buscarAtividade = async () => {
    try {
      const resposta = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
      )

      const dados = await resposta.json()

      setAtividade(dados)
    } catch (erro) {
      console.log('Erro ao carregar a atividade:', erro)
    }
  }

  return (
    <View style={estilos.container}>

      <Text>
        Clique abaixo para carregar uma atividade
      </Text>

      <Pressable
        style={estilos.botao}
        onPress={buscarAtividade}
      >
        <Text style={estilos.botaoTexto}>
          Buscar atividade
        </Text>
      </Pressable>

      {atividade && (
        <View style={estilos.atividade}>
          <Text style={estilos.texto}>
            {atividade.id} - {atividade.title}:{' '}
            {atividade.completed ? 'feito' : 'a fazer'}
          </Text>
        </View>
      )}

    </View>
  )
}
