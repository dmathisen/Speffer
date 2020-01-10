import React, { createContext, useState } from 'react';
import Utils from '../utilities/Utils';
import Validation from '../utilities/Validation';

export const SearchSettingsContext = createContext({});

const SearchSettingsContextProvider = (props: any) => {
	const [searchSettings, setSearchSettings]: any = useState(Utils.getSearchSettings());
	const searchCategories: string[] = searchSettings ? Object.keys(searchSettings) : [];

	const updateLocalStorage = (updatedSearchSettings: any) => {
		localStorage.setItem('searchSettings', JSON.stringify(updatedSearchSettings));
	}
    
    const addCategory = (category: string = '') => {
		if (!Validation.isAddCategoryValid(searchCategories, category)) return false;
		
		let updatedSearchSettings = { [category]: [], ...searchSettings }
		setSearchSettings(updatedSearchSettings);
		updateLocalStorage(updatedSearchSettings);
	};
    
    const removeCategory = (category: string = '') => {
		if (!Validation.isRemoveCategoryValid(searchCategories, category)) return false;

		let updatedSearchSettings = {...searchSettings};
		delete updatedSearchSettings[category];
		setSearchSettings(updatedSearchSettings);
		updateLocalStorage(updatedSearchSettings);
    };
    
    const addSite = (category: string = '', site: string = '') => {
		if (!Validation.isAddSiteValid(searchCategories, category, searchSettings, site)) return false;

		let updatedCategory = searchSettings[category];
		updatedCategory.unshift(site);
		let updatedSearchSettings = { ...searchSettings, [category]: updatedCategory };
		setSearchSettings(updatedSearchSettings);
		updateLocalStorage(updatedSearchSettings);
	};

	const removeSite = (category: string = '', site: string = '') => {
		if (!Validation.isRemoveSiteValid(searchCategories, category, searchSettings, site)) return false;

		let updatedCategory = searchSettings[category].filter((s: string) => s !== site)
		let updatedSearchSettings = { ...searchSettings, [category]: updatedCategory };
		setSearchSettings(updatedSearchSettings);
		updateLocalStorage(updatedSearchSettings);
	};
    
    return (
        <SearchSettingsContext.Provider value={{ searchSettings, searchCategories, addCategory, removeCategory, addSite, removeSite }}>
            {props.children}
        </SearchSettingsContext.Provider>
    );
}
 
export default SearchSettingsContextProvider;