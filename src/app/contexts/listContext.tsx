import { Dispatch, ReactNode, useReducer, createContext} from "react";
import { Item, ListActions, listReducer } from "../reducers/listReducer";
type ListContextType = {
    list: Item[];
    dispatch: Dispatch<ListActions>;
}
type Props = { children: ReactNode}
export const ListContext =  createContext<ListContextType | null>(null);
export const ListProvider = ({ children }: {children: ReactNode}) => {
    const [list, dispatch] = useReducer(listReducer, []);
    return (
        <ListContext.Provider value={{list, dispatch}}>
            {children}
        </ListContext.Provider>
    )
}