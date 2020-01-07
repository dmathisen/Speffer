import { useState } from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import Customize from '../components/Customize';
import Utilities from '../components/Utilities';

const Index = () => {
	const [searchList, setSearchList]: any = useState(Utilities.getSearchSites());
	const searchCategories: string[] = Object.keys(searchList);

	// events
	const addCategory = (category: string = ''): boolean => {
		if (Utilities.categoryIsValid(searchCategories, category)) {
			setSearchList({ ...searchList, [category]: [] });
			return true;
		}
		return false;
	};

	const addSite = (category: string = '', site: string = ''): boolean => {
		if (Utilities.siteIsValid(searchList, searchCategories, category, site)) {
			let categorySites: any[] = searchList[category];
			categorySites.push(site);
			setSearchList({ ...searchList, [category]: categorySites });
			return true;
		}
		return false;
	};

	const removeCategory = (category: string) => {
		console.log('removeCategory', category);
	};

	const removeSite = (category: string, site: string) => {
		console.log('removeSite', category, site);
	};


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