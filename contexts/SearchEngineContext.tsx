import { createContext, useState } from 'react';
import Utils from '../utilities/Utils';

export const SearchEngineContext = createContext({});

const SearchEngineContextProvider = (props: any) => {
    const [selectedSearchEngine, setSelectedSearchEngine] = useState(Utils.getSelectedSearchEngine());
	
	const updateLocalStorage = (searchEngine: string) => {
		localStorage.setItem('searchEngine', searchEngine)
	};
	
    const setSearchEngine = (searchEngine: string) => {
		setSelectedSearchEngine(searchEngine);
		updateLocalStorage(searchEngine);
	};
    
    return (
        <SearchEngineContext.Provider value={{ selectedSearchEngine, setSearchEngine }}>
            {props.children}
        </SearchEngineContext.Provider>
    );
}
 
export default SearchEngineContextProvider;