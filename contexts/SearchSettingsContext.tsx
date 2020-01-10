import React, { createContext, useState } from 'react';
import Utilities from '../components/Utilities';

export const SearchSettingsContext = createContext({});

const SearchSettingsContextProvider = (props: any) => {
	const [searchSettings, setSearchSettings]: any = useState(Utilities.getSearchSites());
	const searchCategories: string[] = Object.keys(searchSettings);
    
    const addCategory = (category: string = '') => {
		if (!Utilities.isAddCategoryValid(searchCategories, category)) return false;
		
		setSearchSettings({ [category]: [], ...searchSettings });
		return true;
	};
    
    const removeCategory = (category: string = '') => {
		if (!Utilities.isRemoveCategoryValid(searchCategories, category)) return false;

		let updatedSearchSettings = {...searchSettings};
		delete updatedSearchSettings[category];
		setSearchSettings(updatedSearchSettings);
		return true;
    };
    
    const addSite = (category: string = '', site: string = '') => {
		if (!Utilities.isAddSiteValid(searchCategories, category, searchSettings, site)) return false;

		let updatedCategory = searchSettings[category];
		updatedCategory.unshift(site);
		setSearchSettings({ ...searchSettings, [category]: updatedCategory });
		return true;
	};

	const removeSite = (category: string = '', site: string = '') => {
		if (!Utilities.isRemoveSiteValid(searchCategories, category, searchSettings, site)) return false;

		let updatedCategory = searchSettings[category].filter((s: string) => s !== site)
		setSearchSettings({ ...searchSettings, [category]: updatedCategory });
		return true;
	};
    
    return (
        <SearchSettingsContext.Provider value={{ searchSettings, searchCategories, addCategory, removeCategory, addSite, removeSite }}>
            {props.children}
        </SearchSettingsContext.Provider>
    );
}
 
export default SearchSettingsContextProvider;