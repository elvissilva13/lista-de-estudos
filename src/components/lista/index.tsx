
import { ITarefa } from "../../types/tarefas";
import Item from "./item";
import style from'./lista.module.scss';

interface Props {
    tarefas:ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}


function Lista({ tarefas,selecionaTarefa }: Props){
    return(
        <aside className={style.listaTarefas}>
            <h2> Estudos do Dia </h2>
            <ul>
                {tarefas.map(item =>(
                    <Item
                    selecionaTarefa ={selecionaTarefa} 
                    key={item.id}
                       // tarefa={item.tarefa} 
                       // tempo={item.tempo}                  
                       {...item}//puxa todos atributos existente 
                      />
                ))}

            </ul>
        </aside>
    )
}

export default Lista;