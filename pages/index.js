import Head from 'next/head';

import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import Customize from '../components/Customize';

import DefaultSites from '../data/sites';

function getSearchSites() {
	if (process.browser) {
		const localStorageData = window.localStorage.getItem('searchSites');
		if (localStorageData) {
			return localStorageData;
		}
	}

	return DefaultSites;
}

const Index = (props) => {
	return(<>
		<Head>
			<title>Speffer - Site Search Specifier</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
		</Head>
		
		<Header />
		<SearchForm categories={props.categories} sites={props.sites} />
		<Customize categories={props.categories} sites={props.sites} />

		<style global jsx>{`
			body {
				overflow-y: scroll;
				background-image: url(./images/bg.png);
			}
		`}</style>
	</>);
};

Index.getInitialProps = () => {
	const siteData = getSearchSites();
	return {
		categories: Object.keys(siteData),
		sites: siteData
	}
}

export default Index;