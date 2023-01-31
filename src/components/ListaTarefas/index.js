import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista, setLista] = useState([
    "Aula na Conway",
    "Estudar React",
    "Fazer almoço",
  ]);

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    setLista([...lista, novaTarefa])
    setNovaTarefa("")
  };

  const removeTarefa = (taskIndex) => {
    // const listaFiltrada = lista.filter((elemento) => elemento !== item)
    // setLista(listaFiltrada)
    setLista(lista.filter((tarefa, indice) => indice !== taskIndex))
    setNovaTarefa("")
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>
          {lista.map((item, indice) => {
            return (
              <Tarefa key={indice}>
                <p>{item}</p>
                <RemoveButton onClick={()=>removeTarefa(indice)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
