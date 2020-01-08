import { useState } from 'react';
import Head from 'next/head';

import SearchForm from '../components/SearchForm';
import Settings from '../components/Settings';
import Utilities from '../components/Utilities';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Index = () => {
	const [searchList, setSearchList]: any = useState(Utilities.getSearchSites());
	const searchCategories: string[] = Object.keys(searchList);

	// update state
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
			<title>Speffer - Site Search Specifier</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
		</Head>

		<Container>
			<Row className="text-center">
				<Col>
					<h1>Speffer</h1>
					<SearchForm searchCategories={searchCategories} searchList={searchList} />
				</Col>
			</Row>
			<Row>
				<Col>
					<Settings searchCategories={searchCategories} searchList={searchList} events={{ addCategory, removeCategory, addSite, removeSite }} />
				</Col>
			</Row>
		</Container>

		<style global jsx>{`
			body {
				overflow-y: scroll;
				background-image: url(./images/bg.png);
			}

			h1 {
				margin: 50px 0 30px;
				font-size: 48pt;
				font-family: 'Maven Pro', sans-serif;
				font-weight: bold;
				color: #fff;
				text-shadow: 1px 1px 0 #333;
			}
		`}</style>
	</>);
};

export default Index;