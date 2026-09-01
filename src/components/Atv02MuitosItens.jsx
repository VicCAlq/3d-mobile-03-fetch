/*
  * ATIVIDADE 02: MUITOS ITENS
  *
  * Crie e exporte por padrão um componente chamado Atv02MuitosItens, que deve ter
  * uma <View>, e dentro desta <View> um <Pressable> com o conteúdo 
  * "Clique abaixo para carregar várias atividades", que quando pressionado
  * fará uma requisição usando "fetch" para a URL abaixo:
  *
  * https://jsonplaceholder.typicode.com/todos
  *
  * Esta URL envia uma lista de objetos JSON, cada um com as propriedades:
  * userId: número inteiro
  * id: número inteiro
  * title: texto
  * completed: booleano
  *
  * Ao receber este conteúdo, ele deve ser exibido da seguinte forma
  * dentro de uma <View> abaixo do <Pressable>, onde cada item será
  * um <Text> dentro dessa view:
  * [id] - [title]: [status]
  * Os colchetes indicam que deve se tratar de uma variável, e não
  * do texto dentro deles.
  * O valor de "status" deve ser "feito" se completed for true, 
  * ou "a fazer" se completed for false
  */


import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'

const estilos = StyleSheet.create({
  principal: {
    backgroundColor: '#f3e5f5',
    padding: 16,
    margin: 15,
    borderRadius: 14,
  },

  acao: {
    backgroundColor: '#7b1fa2',
    padding: 12,
    marginTop: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  textoAcao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  lista: {
    backgroundColor: '#fff',
    marginTop: 15,
    padding: 10,
    borderRadius: 10,
  },

  item: {
    fontSize: 15,
    paddingVertical: 5,
  },
})

export default function Atv02MuitosItens() {
  const [atividades, setAtividades] = useState([])

  const carregarAtividades = async () => {
    try {
      const resposta = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      )

      if (!resposta.ok) {
        throw new Error(`Falha na requisição: ${resposta.status}`)
      }

      const dados = await resposta.json()

      setAtividades(dados)
    } catch (erro) {
      console.log('Erro ao buscar atividades:', erro)
    }
  }

  return (
    <View style={estilos.principal}>

      <Text>
        Clique abaixo para carregar várias atividades
      </Text>

      <Pressable
        style={estilos.acao}
        onPress={carregarAtividades}
      >
        <Text style={estilos.textoAcao}>
          Buscar atividades
        </Text>
      </Pressable>

      <View style={estilos.lista}>
        {atividades.map((atividade) => (
          <Text
            key={atividade.id}
            style={estilos.item}
          >
            {atividade.id} - {atividade.title}:{' '}
            {atividade.completed ? 'feito' : 'a fazer'}
          </Text>
        ))}
      </View>

    </View>
  )
}
