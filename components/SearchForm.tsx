import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchForm = () => (
	<>

	<Container>
		<Row className="text-center">
			<Col>
			
				<Form inline>
					<Form.Group className="mx-auto">
						<Form.Control as="select" className="mr-2"><option>Select Category</option></Form.Control>
						<Form.Control type="search" className="mr-2"></Form.Control>
						<Button type="submit" className="mr-2">Search</Button>
					</Form.Group>
				</Form>

			</Col>
		</Row>
	</Container>
	
	</>
  );
  
  export default SearchForm;