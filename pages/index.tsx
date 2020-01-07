import { useState } from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import Customize from '../components/Customize';

import SearchList from '../data/searchList';

function getSearchSites() {
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

const Index = () => {
	// state
	const [searchList, setSearchList]: any = useState(getSearchSites());

	// events
	const addCategory = (category: string = '') => {
		if (categoryIsValid(category)) {
			setSearchList({ ...searchList, [category]: [] });
		}
	};

	const addSite = (category: string = '', site: string = '') => {
		if (siteIsValid(category, site)) {
			let categorySites: any[] = searchList[category];
			categorySites.push(site);
			setSearchList({ ...searchList, [category]: categorySites });
		}
	};

	const removeCategory = (category: string) => {
		console.log('removeCategory', category);
	};

	const removeSite = (category: string, site: string) => {
		console.log('removeSite', category, site);
	};

	// helpers
	const searchCategories = Object.keys(searchList);

	const categoryIsValid = (category: string): boolean => {
		if (!category.trim().length) {
			return false;
		}
		if (searchCategories.find(val => val.toLowerCase() === category.toLowerCase())) {
			alert('Category already exists');
			return false;
		}
		return true;
	}

	const siteIsValid = (category: string, site: string): boolean => {
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
	}

	return(<>
		<Head>
			<title>Speffer - Site Search Specifier</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
		</Head>
		
		<Header />
		<SearchForm searchCategories={searchCategories} searchList={searchList} />
		<Customize searchCategories={searchCategories} searchList={searchList} events={{ addCategory, addSite, removeCategory, removeSite }} />

		<style global jsx>{`
			body {
				overflow-y: scroll;
				background-image: url(./images/bg.png);
			}
		`}</style>
	</>);
};

export default Index;