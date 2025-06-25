import { use, useState } from 'react'

function App() {
  const [tarefa, setTarefa] = useState('')
  const [lista, setLista] = useState([])

  const adicionarTarefa = () => {
    if (tarefa.trim() !== '') {
      setLista([...lista, { texto: tarefa, concluida: false }])
      setTarefa('')
    }
  }

  const toggleConcluida = (index) => {
    const novaLista = [...lista]
    novaLista[index].concluida = !novaLista[index].concluida
    setLista(novaLista)
  }

  const excluirTarefa = (index) => {
    const novaLista = lista.filter((_, i) => i !== index)
    setLista(novaLista)
  }

  return (
    <div className="container">
      <h1 className="title">To Do List 📝</h1>

      <div className="input-area">
        <input
          type="text"
          placeholder="Digite uma tarefa..."
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />
        <button className="btn-adicionar" onClick={adicionarTarefa}>
          Adicionar
        </button>
      </div>

      <ul className="lista-tarefas">
        {lista.map((item, index) => (
          <li key={index} className={item.concluida ? 'concluida' : ''}>
          <span className="texto-tarefa">{item.texto}</span>
            <div className="botoes">
              <button onClick={() => toggleConcluida(index)}>  {item.concluida ? '❌' : '✅'}</button>
              <button onClick={() => excluirTarefa(index)}>🗑️</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App