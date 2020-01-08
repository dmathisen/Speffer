import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const SearchForm = ({ searchCategories, searchList }: any) => {
	// state
	const [selectedCategory, setSelectedCategory] = useState('');
	const [searchText, setSearchText] = useState('');

	//  events
	const handleSearchSubmit = (e: any) => {
		e.preventDefault();
		if (!selectedCategory.trim().length || !searchText.trim().length) return;

		const base = 'https://www.google.com/search?q=';
		const siteQueryArr = searchList[selectedCategory].map((site: string, index: number) => {
			return index === 0 ? `+site%3A${site}` : `+OR+site%3A${site}`;
		})
		const url = `${base}${searchText}${siteQueryArr.join('')}`;
		window.location.href = url;
	}

	const handleSettingsBtnClick = (e: any) => {
		document.querySelector('.search-settings')?.classList.toggle('search-settings-visible');
		document.querySelector('.cog')?.classList.toggle('cog-active');
	}

	return(<>				
		<Form inline onSubmit={handleSearchSubmit} className="mb-4">
			<Form.Group className="mx-auto">

				{/* category select */}
				<Form.Control as="select" className="mr-2" onChange={(e: any) => setSelectedCategory(e.target.value)}>
					<option value=''>Select Category</option>
					{
						searchCategories.map((category: any, index: number) => 
							<option key={index} value={category}>{category}</option>
						)
					}
				</Form.Control>

				{/* search bar */}
				<Form.Control type="search" className="search-bar mr-2" onChange={(e: any) => setSearchText(e.target.value)}></Form.Control>

				{/* search button */}
				<Button type="submit">Search</Button>

				{/* settings button */}
				<Button type="button" variant="link" onClick={handleSettingsBtnClick}>
					<img className="cog" src="./images/cog.svg" width="20" />
					<span className="sr-only">Settings</span>
				</Button>
				
			</Form.Group>
		</Form>
		
		{/* show list of search sites */}
		{ selectedCategory.trim().length ? <div>Sites to search:</div> : '' }
		{
			selectedCategory.trim().length ? searchList[selectedCategory].map((site: string, index: number) => 
				<Badge variant="secondary" className="mr-2" key={index}>{site}</Badge>
			) : ''
		}

		<style global jsx>{`
			.search-bar {
				min-width: 300px;
			}

			.cog {
				transition: transform .3s ease-in-out;
			}
			.cog-active {
				transform:rotate(180deg);
			}
		`}</style>
	</>);
};
  
  export default SearchForm;