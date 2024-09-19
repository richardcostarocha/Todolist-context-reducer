import { useContext } from "react";
import { ListContext } from "../contexts/listContext"
export const List = () => {
    const listCtx = useContext(ListContext);
    const handleEdit = (id:number) => {
      const tarefa = listCtx?.list.find(it => it.id === id);
      if(!tarefa) return false;
      const novatarefa = window.prompt('Editar a Tarefa', tarefa.text);
      if(!novatarefa || novatarefa.trim() === '') return false;
      listCtx?.dispatch({
        type:'editText',
        payload: {
          id: id,
          newText: novatarefa
        }
      })
    }
    const handleRemove = (id:number) =>{
      if(!window.confirm('Tem certeza que quer remover a tarefa?')) return false;
      listCtx?.dispatch({
        type: 'remove',
        payload: {
          id: id
        }
      })
    }
  return (
    <ul className="flex-1  overflow-y-auto">
        {listCtx?.list.map(it => (
            <li 
            key={it.id}
            className="flex items-center py-3 border-b border-gray-500 "
            >
              <input 
              type="checkbox" 
              className="m-3 rounded-md" 
              onClick={() => listCtx?.dispatch({type: 'toggleDone', payload:{id: it.id}})} 
              />
              <p className={it.done?"flex-1 text-violet-600": "flex-1"}>{it.text}</p>
              <button className="m-2" onClick={() => handleEdit(it.id)}>editar</button>
              <button className="pr-3" onClick={() => handleRemove(it.id)}>excluir</button>
            </li>
        ))}
    </ul>
  )
}

