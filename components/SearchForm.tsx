import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
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

	// helpers
	const getSitesToSearch = () => {
		if (!selectedCategory.trim().length) return '';
		return searchList[selectedCategory].join(', ');
	}

	return(<>
		<Container>
			<Row className="text-center">
				<Col>
				
					<Form inline onSubmit={handleSearchSubmit}>
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
				</Col>
			</Row>

			<Row>
				<Col>
					Selected Cat: {selectedCategory}<br/>
					Search Text: {searchText}<br/>
					Sites to search: { getSitesToSearch() }
				</Col>
			</Row>
		</Container>

		<style global jsx>{`
			.search-bar {
				min-width: 300px;
			}
		`}</style>
	</>);
};
  
  export default SearchForm;