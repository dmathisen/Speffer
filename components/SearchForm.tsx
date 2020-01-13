import { useState, useContext } from 'react';
import { SearchSettingsContext } from '../contexts/SearchSettingsContext';
import { SearchEngineContext } from '../contexts/SearchEngineContext';

import Utils from '../utilities/Utils';

import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const SearchForm = () => {
	const { selectedSearchEngine } = useContext(SearchEngineContext as any);
	const { searchSettings, searchCategories } = useContext(SearchSettingsContext as any);

	const [ selectedCategory, setSelectedCategory ] = useState('');
	const [searchText, setSearchText] = useState('');

	const categoryIsSelected: boolean = !!selectedCategory.trim().length;

	//  events
	const handleSettingsBtnClick = (e: any) => {
		document.querySelector('.search-settings')?.classList.toggle('search-settings-visible');
		document.querySelector('.cog')?.classList.toggle('cog-active');
	}
	
	const handleSearchSubmit = (e: any) => {
		e.preventDefault();
		if (!selectedCategory.trim().length || !searchText.trim().length) return;

		const searchUrl = Utils.getSearchUrl(selectedSearchEngine, searchSettings[selectedCategory], searchText);
		window.location.href = searchUrl;
	}

	return(<>				
		<Form inline onSubmit={handleSearchSubmit} className="mb-4 justify-content-center">
			<Form.Control as="select" className="mb-2 mr-sm-2" onChange={(e: any) => setSelectedCategory(e.target.value)}>
				<option value=''>- Select Category -</option>
				{ searchCategories.map((category: any, index: number) => <option key={index} value={category}>{category}</option>) }
			</Form.Control>
			<Form.Control type="search" className="mb-2 mr-sm-2" onChange={(e: any) => setSearchText(e.target.value)}></Form.Control>
			<Button type="submit" className="mb-2">Search</Button>
			<Button type="button" className="mb-2 mr-sm-2" variant="link" onClick={handleSettingsBtnClick}>
				<img className="cog" src="./images/cog.png" />
				<span className="sr-only">Settings</span>
			</Button>
		</Form>
		
		<div style={{display: categoryIsSelected ? 'block' : 'none' }}>
			{/* list of search sites */}
			Sites to search:<br/>
			{
				categoryIsSelected ? searchSettings[selectedCategory].map((site: string, index: number) => 
					<a href={'http://' + site} target="_blank" key={index}><Badge variant="secondary" className="mr-2">{site}</Badge></a>
				) : ''
			}
		</div>

		<style global jsx>{`
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