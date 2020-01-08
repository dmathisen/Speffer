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
		console.log(`Searching ${selectedCategory} sites for: ${searchText}`);
		console.log('sites', searchList[selectedCategory].join(', '));
	}

	return(<>				
		<Form inline onSubmit={handleSearchSubmit} className="mb-4">
			<Form.Group className="mx-auto">
				<Form.Control as="select" className="mr-2" onChange={(e: any) => setSelectedCategory(e.target.value)}>
					<option value=''>Select Category</option>
					{
						searchCategories.map((category: any, index: number) => 
							<option key={index} value={category}>{category}</option>
						)
					}
				</Form.Control>

				<Form.Control type="search" className="search-bar mr-2" onChange={(e: any) => setSearchText(e.target.value)}></Form.Control>

				<Button type="submit">Search</Button>
			</Form.Group>
		</Form>
		
		{ selectedCategory.trim().length ? <div>Sites to search:</div> : '' }
		{
			selectedCategory.trim().length ? searchList[selectedCategory].map((site: string) => 
				<Badge variant="secondary" className="mr-2">{site}</Badge>
			) : ''
		}

		<style global jsx>{`
			.search-bar {
				min-width: 300px;
			}
		`}</style>
	</>);
};
  
  export default SearchForm;