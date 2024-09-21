import { useContext, useState } from "react"
import { ListContext } from "../contexts/listContext";
 export const Input = () => {
    const [addTarefa, setAddTarefa] = useState('');
    const listCtx = useContext(ListContext);
    const handleClick = () => {
        if(addTarefa.trim() === '') return false
    listCtx?.dispatch({
      type: 'add',
      payload: {
        text: addTarefa.trim()
      }
    })
    setAddTarefa('');
    }
  return (
    <div className="mt-auto mb-2 ml-2  flex flex-[0_0_50px]">
      <input 
      type="text"
      placeholder="Digite uma tarefa"
      value={addTarefa}
      onChange={e => setAddTarefa(e.target.value)}
      onKeyDown={e => { if (e.key === 'Enter') handleClick(); }}
      className="flex-1 rounded-md pl-4 text-black"
       />
      <button className="mx-4 bg-blue-600 border-gray-800 border rounded p-3" onClick={handleClick}>ADICIONAR</button>
    </div>
  )
}


