import { useState, useEffect } from 'react';
import Head from 'next/head';

import SearchForm from '../components/SearchForm';
import Settings from '../components/Settings';
import Utilities from '../components/Utilities';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Index = (props: any) => {
	const [searchList, setSearchList]: any = useState(props.searchList);
	const [selectedSearchEngine, setSelectedSearchEngine] = useState(props.selectedSearchEngine);
	const searchCategories: string[] = Object.keys(searchList);

	useEffect(() => {
		localStorage.setItem('searchList', JSON.stringify(searchList));
	}, [searchList])

	useEffect(() => {
		localStorage.setItem('selectedSearchEngine', JSON.stringify(selectedSearchEngine));
	}, [selectedSearchEngine])

	// update state
	const onSearchEngineChange = (searchEngine: string = 'google') => {
		setSelectedSearchEngine(searchEngine);
	}

	const addCategory = (category: string = ''): boolean => {
		if (!Utilities.isAddCategoryValid(searchCategories, category)) return false;
		
		setSearchList({ [category]: [], ...searchList });
		return true;
	};

	const removeCategory = (category: string = ''): boolean => {
		if (!Utilities.isRemoveCategoryValid(searchCategories, category)) return false;

		let updatedSearchList = {...searchList};
		delete updatedSearchList[category];
		setSearchList(updatedSearchList);
		return true;
	};

	const addSite = (category: string = '', site: string = ''): boolean => {
		if (!Utilities.isAddSiteValid(searchCategories, category, searchList, site)) return false;

		let updatedCategory = searchList[category];
		updatedCategory.unshift(site);
		setSearchList({ ...searchList, [category]: updatedCategory });
		return true;
	};

	const removeSite = (category: string = '', site: string = ''): boolean => {
		if (!Utilities.isRemoveSiteValid(searchCategories, category, searchList, site)) return false;

		let updatedCategory = searchList[category].filter((s: string) => s !== site)
		setSearchList({ ...searchList, [category]: updatedCategory });
		return true;
	};

	return(<>
		<Head>
			<title>Speffer - Search Engine Customization</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="" crossOrigin="anonymous" />
		</Head>

		<Container>
			<Row className="text-center">
				<Col>
					<h1>Speffer</h1>
					<h2>Customize your searches to get better results...</h2>
					<SearchForm searchCategories={searchCategories} searchList={searchList} selectedSearchEngine={selectedSearchEngine} />
				</Col>
			</Row>
			<Row>
				<Col>
					<Settings searchCategories={searchCategories} searchList={searchList} events={{ addCategory, removeCategory, addSite, removeSite, onSearchEngineChange }} />
				</Col>
			</Row>
		</Container>

		<style global jsx>{`
			body {
				overflow-y: scroll;
				background-image: url(./images/bg.png);
			}

			h1 {
				margin: 3rem 0 2rem;
				font-size: 4rem;
				font-family: 'Maven Pro', sans-serif;
				font-weight: bold;
				color: #fff;
				text-shadow: 1px 1px 0 #333;
			}

			h2 {
				font-size: 1.25rem;
				color: #777;
				margin-bottom: 1rem;
			}
		`}</style>
	</>);
};

Index.getInitialProps = async () => {
	return {
		searchList: Utilities.getSearchSites(),
		selectedSearchEngine: Utilities.getSelectedSearchEngine()
	}
  }

export default Index;