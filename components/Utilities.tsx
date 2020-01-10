import DefaultSearchSettings from '../data/DefaultSearchSettings';

const Utilities = {
	isAddCategoryValid(searchCategories: string[], category: string): boolean {
		if (category.trim().length === 0) {
			return false;
		}
		if (Utilities.categoryExists(searchCategories, category)) {
			alert('Category already exists.');
			return false;
		}
		return true;
	},

	isRemoveCategoryValid(searchCategories: string[], category: string): boolean {
		if (category.trim().length === 0) {
			return false;
		}
		if (!Utilities.categoryExists(searchCategories, category)) {
			alert('Something went wrong. Category does not exist.');
			return false;
		}
		return true;
	},

	isAddSiteValid(searchCategories: string[], category: string, searchSettings: any, site: string): boolean {
		if (site.trim().length === 0) {
			return false;
		}
		if (!Utilities.categoryExists(searchCategories, category)) {
			alert('Something went wrong. Category does not exist.');
			return false;
		}
		if (Utilities.siteExists(searchSettings, category, site)) {
			alert('Site already exists.');
			return false;
		}
		if (!Utilities.urlIsValid(site)) {
			alert('The URL looks invalid.');
			return false;
		}
		return true;
	},

	isRemoveSiteValid(searchCategories: string[], category: string, searchSettings: any, site: string): boolean {
		if (category.trim().length === 0 || site.trim().length === 0) {
			return false;
		}
		if (!Utilities.categoryExists(searchCategories, category)) {
			alert('Something went wrong. Category does not exist.');
			return false;
		}
		if (!Utilities.siteExists(searchSettings, category, site)) {
			alert('Something went wrong. Site does not exist.');
			return false;
		}
		return true;
	},

	urlIsValid(site: string): boolean {
		if (site.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm)) {
			return true;
		}
		return false;
	},

	categoryExists(searchCategories: string[], category: string): boolean {
		if (searchCategories.find(cat => cat.toLowerCase() === category.toLowerCase())) {
			return true;
		}
		return false;
	},

	siteExists(searchSettings: any, category: string, site: string): boolean {
		if (searchSettings[category].find((s: string) => s.toLowerCase() === site.toLowerCase())) {
			return true;
		}
		return false;
	},

	getSearchSites() {
		// get from local storage, if it exists
		if (process.browser) {
			const localStorageData = window.localStorage.getItem('searchSettings');
			if (localStorageData) {
				return JSON.parse(localStorageData);
			}
		}
	
		// if not, get data from /data/sites.json
		return DefaultSearchSettings;
	},

	getSelectedSearchEngine() {
		// get from local storage, if it exists
		if (process.browser) {
			const localStorageData = window.localStorage.getItem('selectedSearchEngine');
			if (localStorageData) {
				return JSON.parse(localStorageData);
			}
		}

		// default to google
		return 'google';
	},

	getSearchUrl(selectedSearchEngine: string, sites: string[], searchText: string) {
		let base;
		switch(selectedSearchEngine) {
			case 'google': base = 'https://www.google.com/search?q='; break;
			case 'duckDuckGo': base = 'https://duckduckgo.com/?q='; break;
		}

		const siteQueryArr = sites.map((site: string, index: number) => {
			return index === 0 ? `+site%3A${site}` : `+OR+site%3A${site}`;
		})

		return `${base}${searchText}${siteQueryArr.join('')}`;
	}
}

export default Utilities;