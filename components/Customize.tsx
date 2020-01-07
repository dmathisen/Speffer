import { useState } from 'react';

import CategoryList from './CategoryList';
import CategoryAdd from './CategoryAdd';
import SitesList from './SitesList';
import SitesAdd from './SitesAdd';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

const Customize = ({ categories, sites, events }: any) => {
	// state
	const [selectedCategory, setSelectedCategory]: any = useState('');
	const [selectedCategorySites, setSelectedCategorySites]: any = useState('');
	const [categoryToAdd, setCategoryToAdd]: any = useState('');
	const [siteToAdd, setSiteToAdd]: any = useState('');

	//  events
	const handleAddCategoryChange = (e: any) => setCategoryToAdd(e.target.value);
	const handleAddSiteChange = (e: any) => setSiteToAdd(e.target.value);

	const handleCategorySelect = (e: any) => {
		e.preventDefault();
		setSelectedCategory(e.target.dataset.category);
		setSelectedCategorySites(sites[e.target.dataset.category])
	}

	const addCategory = (e: any) => {
		e.preventDefault();
		events.addCategory(categoryToAdd);
	}

	const addSite = (e: any) => {
		e.preventDefault();
		events.addSite(selectedCategory, siteToAdd);
	}

	return (<>
		<Container>
			<Row>
				<Col>
				
					<Accordion defaultActiveKey="0">
						<Card>
							<Card.Header>
								<Accordion.Toggle as={Button} variant="link" eventKey="0">Customize</Accordion.Toggle>
							</Card.Header>

							<Accordion.Collapse eventKey="0">
								<Card.Body>
									
									<Container>
										<Row>

											<Col>
												{/* Categories */}
												<CategoryAdd onSubmit={addCategory} onInputChange={handleAddCategoryChange} />
												<CategoryList categories={categories} onCategoryClick={handleCategorySelect} />
											</Col>

											<Col>
												{/* Sites */}
												<SitesAdd selectedCategory={selectedCategory} onSubmit={addSite} onInputChange={handleAddSiteChange} />
												<SitesList selectedCategorySites={selectedCategorySites} />
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

		<style jsx>{`
			.category-list .list-group-item {
				cursor: pointer;
			}
		`}</style>
	</>);
}

export default Customize;