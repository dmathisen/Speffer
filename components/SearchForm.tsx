import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchForm = ({ categories, sites }: any)  => {
	// state
	const [selectedCategory, setSelectedCategory] = useState('');
	const [searchText, setSearchText] = useState('');

	//  events
	const handleCategoryChange = (e: any) => setSelectedCategory(e.target.value);
	const handleSearchTextChange = (e: any) => setSearchText(e.target.value);

	const handleSearchSubmit = (e: any) => {
		e.preventDefault();
		if (!selectedCategory.length || !searchText.length) return;
		console.log(`Searching ${selectedCategory} sites for: ${searchText}`);
		console.log('sites', sites[selectedCategory].join(', '));
	}

	// helpers
	const getSitesToSearch = () => {
		if (!selectedCategory.length) return '';
		return sites[selectedCategory].join(', ');
	}

	return(<>
		<Container>
			<Row className="text-center">
				<Col>
				
					<Form inline onSubmit={handleSearchSubmit}>
						<Form.Group className="mx-auto">
							<Form.Control as="select" className="mr-2" onChange={handleCategoryChange}>
								<option value=''>Select Category</option>
								{
									categories.map((category: any, index: number) => 
										<option key={index} value={category}>{category}</option>
									)
								}
							</Form.Control>

							<Form.Control type="search" className="search-bar mr-2" onChange={handleSearchTextChange}></Form.Control>

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

		<style jsx>{`
			.search-bar {
				min-width: 300px;
			}
		`}</style>
	</>);
};
  
  export default SearchForm;