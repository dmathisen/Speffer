import { useState } from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import Customize from '../components/Customize';

import DefaultSiteData from '../data/sites';

function getSearchSites() {
	// get from user local storage, if it exists
	if (process.browser) {
		const localStorageData = window.localStorage.getItem('searchSites');
		if (localStorageData) {
			return localStorageData;
		}
	}

	// if not, get data from /data/sites.json
	return DefaultSiteData;
}

const Index = () => {
	// state
	const [sites, setSites]: any = useState(getSearchSites());

	// events
	const addCategory = (category: string) => {
		setSites({ ...sites, [category]: [] });
	};

	const addSite = (category: string, site: string) => {
		let categorySites: any[] = sites[category];
		categorySites.push(site);
		setSites({ ...sites, [category]: categorySites });
	};

	const removeCategory = (category: string) => {
		console.log('removeCategory', category);
	};

	const removeSite = (category: string, site: string) => {
		console.log('removeSite', category, site);
	};

	const allEvents = { addCategory, addSite, removeCategory, removeSite };
	const categories = Object.keys(sites);

	return(<>
		<Head>
			<title>Speffer - Site Search Specifier</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
		</Head>
		
		<Header />
		<SearchForm categories={categories} sites={sites} />
		<Customize categories={categories} sites={sites} events={allEvents} />

		<style global jsx>{`
			body {
				overflow-y: scroll;
				background-image: url(./images/bg.png);
			}
		`}</style>
	</>);
};

export default Index;