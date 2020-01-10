import React, { createContext, useState, useEffect } from 'react';
import Utils from '../utilities/Utils';
import Validation from '../utilities/Validation';

export const SearchSettingsContext = createContext({});

const SearchSettingsContextProvider = (props: any) => {
	const [searchSettings, setSearchSettings]: any = useState(Utils.getSearchSites());
	const searchCategories: string[] = Object.keys(searchSettings);
    
    const addCategory = (category: string = '') => {
		if (!Validation.isAddCategoryValid(searchCategories, category)) return false;
		
		setSearchSettings({ [category]: [], ...searchSettings });
		return true;
	};
    
    const removeCategory = (category: string = '') => {
		if (!Validation.isRemoveCategoryValid(searchCategories, category)) return false;

		let updatedSearchSettings = {...searchSettings};
		delete updatedSearchSettings[category];
		setSearchSettings(updatedSearchSettings);
		return true;
    };
    
    const addSite = (category: string = '', site: string = '') => {
		if (!Validation.isAddSiteValid(searchCategories, category, searchSettings, site)) return false;

		let updatedCategory = searchSettings[category];
		updatedCategory.unshift(site);
		setSearchSettings({ ...searchSettings, [category]: updatedCategory });
		return true;
	};

	const removeSite = (category: string = '', site: string = '') => {
		if (!Validation.isRemoveSiteValid(searchCategories, category, searchSettings, site)) return false;

		let updatedCategory = searchSettings[category].filter((s: string) => s !== site)
		setSearchSettings({ ...searchSettings, [category]: updatedCategory });
		return true;
	};

	useEffect(() => {
		localStorage.setItem('searchSettings', JSON.stringify(searchSettings))
	}, [searchSettings]);
    
    return (
        <SearchSettingsContext.Provider value={{ searchSettings, searchCategories, addCategory, removeCategory, addSite, removeSite }}>
            {props.children}
        </SearchSettingsContext.Provider>
    );
}
 
export default SearchSettingsContextProvider;