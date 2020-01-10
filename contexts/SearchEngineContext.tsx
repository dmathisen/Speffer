import { createContext, useState, useEffect } from 'react';
import Utilities from '../components/Utilities';

export const SearchEngineContext = createContext({});

const SearchEngineContextProvider = (props: any) => {
    const [selectedSearchEngine, setSelectedSearchEngine] = useState(Utilities.getSelectedSearchEngine());
    
    const setSearchEngine = (searchEngine: string) => {
        setSelectedSearchEngine(searchEngine);
    }
	
	useEffect(() => {
		localStorage.setItem('searchSettings', JSON.stringify(selectedSearchEngine))
	}, [selectedSearchEngine]);
    
    return (
        <SearchEngineContext.Provider value={{ selectedSearchEngine, setSearchEngine }}>
            {props.children}
        </SearchEngineContext.Provider>
    );
}
 
export default SearchEngineContextProvider;