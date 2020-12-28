import {createContext} from 'react';
import {observer, useLocalObservable, useLocalStore} from 'mobx-react';

export const PositionContext = createContext();
export const PositionProvider = ({children}) => {
    const position = useLocalObservable(()=>({
        data:[],
        selectedData:null,
        addPosition(data){
            this.data = data
        },
        selectData(id){
            var select = this.data.filter(data=> data.id === id)
            var data = Object.assign({}, ...select)
            this.selectedData = data
        }
    }))

    return (<PositionContext.Provider value={position}>
        {children}
    </PositionContext.Provider>)
}
