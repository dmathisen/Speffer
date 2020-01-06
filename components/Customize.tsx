import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Customize = ({ categories, sites }: any) => {
	// state
	const [selectedCategory, setSelectedCategory]: any = useState('');
	const [selectedCategorySites, setSelectedCategorySites]: any = useState('');

	//  events
	const handleCategoryClick = (e: any) => {
		e.preventDefault();
		setSelectedCategory(e.target.textContent);
		setSelectedCategorySites(sites[e.target.textContent])
	}

	const renderSitesList = () => {
		if (!selectedCategory.length) return;
		return selectedCategorySites.map((site: any) => {
			return <ListGroup.Item>{site}</ListGroup.Item>;
		});
	}

	return (<>
		<Container>
			<Row>
				<Col>
				
					<Accordion>
						<Card>
							<Card.Header>
								<Accordion.Toggle as={Button} variant="link" eventKey="0">
									Customize
								</Accordion.Toggle>
							</Card.Header>

							<Accordion.Collapse eventKey="0">
								<Card.Body>
									
									<Container>
										<Row>

											<Col>
												{/* Categories */}
												<ListGroup>
													{
														categories.map((category: any, index: number) =>
															<ListGroup.Item action onClick={handleCategoryClick} key={index}>
																{category}
															</ListGroup.Item>
														)
													}
												</ListGroup>
											</Col>

											<Col>
												{/* Sites */}
												<ListGroup variant="flush">
													{ renderSitesList() }
												</ListGroup>
											</Col>

										</Row>
									</Container>

								</Card.Body>
							</Accordion.Collapse>
						</Card>
					</Accordion>

				</Col>
			</Row>
		</Container>
	</>);
}

export default Customize;