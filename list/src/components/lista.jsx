import React, { useState, useEffect } from 'react';
import './styles.css';

const TaskApp = () => {
  const [listaDeTarefas, setListaDeTarefas] = useState([]);
  const [textoDaTarefa, setTextoDaTarefa] = useState('');
  const [filtro, setFiltro] = useState('ativas');

  useEffect(() => {
    localStorage.setItem('listaDeTarefas', JSON.stringify(listaDeTarefas));
  }, [listaDeTarefas]);

  const adicionarTarefa = () => {
    const novaTarefa = {
      id: new Date().getTime(),
      texto: textoDaTarefa,
      concluida: false,
    };
    setListaDeTarefas([...listaDeTarefas, novaTarefa]);
    setTextoDaTarefa('');
  };

  const alterarStatusDaTarefa = (id) => {
    const novasTarefas = listaDeTarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return { ...tarefa, concluida: !tarefa.concluida };
      }
      return tarefa;
    });
    setListaDeTarefas(novasTarefas);
  };

  const removerTarefa = (id) => {
    setListaDeTarefas(listaDeTarefas.filter((tarefa) => tarefa.id !== id));
  };

  const tarefasFiltradas = listaDeTarefas.filter((tarefa) => 
    filtro === 'ativas' ? !tarefa.concluida : tarefa.concluida
  );

  return (
    <div className="container">
      <input
        type="text"
        value={textoDaTarefa}
        onChange={(e) => setTextoDaTarefa(e.target.value)}
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <button
        className={`filter ${filtro === 'ativas' ? 'active' : ''}`}
        onClick={() => setFiltro('ativas')}
      >
        Ativas
      </button>
      <button
        className={`filter ${filtro === 'concluidas' ? 'active' : ''}`}
        onClick={() => setFiltro('concluidas')}
      >
        Concluidas
      </button>
      <ul>
        {tarefasFiltradas.map((tarefa) => (
          <li key={tarefa.id}>
            <input
              type="checkbox"
              checked={tarefa.concluida}
              onChange={() => alterarStatusDaTarefa(tarefa.id)}
            />
            {tarefa.texto}
            <button onClick={() => removerTarefa(tarefa.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskApp;