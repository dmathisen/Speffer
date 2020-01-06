import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchForm = (props: any)  => {
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
		console.log('props', props);
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
									props.categories.map((category: any, index: number) => 
										<option key={index} value={category}>{category}</option>
									)
								}
							</Form.Control>

							<Form.Control type="search" className="mr-2" onChange={handleSearchTextChange}></Form.Control>

							<Button type="submit">Search</Button>
						</Form.Group>
					</Form>

					Selected Cat: {selectedCategory}<br/>
					Search Text: {searchText}<br/>
				</Col>
			</Row>
		</Container>
	</>);
};
  
  export default SearchForm;