import React from "react";
import "./styles.css";

const ListaDeTarefas = ({ tarefas }) => {
  return (
    <ul>
      {tarefas.map((tarefa, indice) => (
        <li key={indice}>
          <input
            type="checkbox"
            checked={tarefa.concluida}
            onChange={() => {}}
          />
          {tarefa.texto}
          <button>Deletar</button>
        </li>
      ))}
    </ul>
  );
};

export default ListaDeTarefas;
