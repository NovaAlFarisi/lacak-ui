import {createContext} from 'react';
import {observer, useLocalObservable, useLocalStore} from 'mobx-react';

export const PositionContext = createContext();
export const PositionProvider = ({children}) => {
    const position = useLocalObservable(()=>({
        data:[],
        addPosition(data){
            this.data = data
        },
    }))

    return (<PositionContext.Provider value={position}>
        {children}
    </PositionContext.Provider>)
}
