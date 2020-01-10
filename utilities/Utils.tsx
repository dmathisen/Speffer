import DefaultSearchSettings from '../data/DefaultSearchSettings';

const Utils = {
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

	getSearchSettings() {
		// get from local storage, if it exists
		if (process.browser) {
			const localStorageData = localStorage.getItem('searchSettings');
			if (localStorageData) return JSON.parse(localStorageData);
		}
	
		// if not, get data from /data/DefaultSearchSettings.json
		return DefaultSearchSettings;
	},

	getSelectedSearchEngine() {
		// get from local storage, if it exists
		if (process.browser) {
			const localStorageData = localStorage.getItem('selectedSearchEngine');
			if (localStorageData) return localStorageData;
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

export default Utils;