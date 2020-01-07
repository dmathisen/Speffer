import SearchList from '../data/searchList';

const Utilities = {
	categoryIsValid(searchCategories: string[], category: string): boolean {
		if (!category.trim().length) {
			return false;
		}
		if (searchCategories.find(val => val.toLowerCase() === category.toLowerCase())) {
			alert('Category already exists');
			return false;
		}
		return true;
	},

	siteIsValid(searchList: any, searchCategories: string[], category: string, site: string): boolean {
		if (!site.trim().length) {
			return false;
		}
		if (!searchCategories.find((c: string) => c.toLowerCase() === category.toLowerCase())) {
			alert('Category does not exist');
			return false;
		}
		if (searchList[category].find((s: string) => s.toLowerCase() === site.toLowerCase())) {
			alert('Site already exists');
			return false;
		}
		if (!site.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm)) {
			alert('The URL looks invalid');
			return false;
		}
		return true;
	},

	getSearchSites() {
		// get from local storage, if it exists
		if (process.browser) {
			const localStorageData = window.localStorage.getItem('searchSites');
			if (localStorageData) {
				return localStorageData;
			}
		}
	
		// if not, get data from /data/sites.json
		return SearchList;
	}
}

export default Utilities;