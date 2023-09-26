import './App.css'
import Card from './components/Card/Card'

function App() {
  const item1 = {
    nome: 'Rick Sanchez',
    imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  }

  // TODO: Criar um segundo item e exibir um card para ele
  const item2 = {
    nome: 'Morty Smith',
    imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  }

  const itens = [item1, item2]

  return (
    <>
      {itens.map(function (item) {
        return <Card item={item}/>
      })}
    </>
  )
}

export default App
