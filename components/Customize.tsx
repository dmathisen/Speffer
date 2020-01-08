import { useState } from 'react';

import CategoryList from './CategoryList';
import CategoryAdd from './CategoryAddForm';
import SitesList from './SitesList';
import SitesAdd from './SitesAddForm';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Customize = ({ searchCategories, searchList, events }: any) => {
	// state
	const [selectedCategory, setSelectedCategory] = useState('');
	const [categoryToAdd, setCategoryToAdd] = useState('');
	const [siteToAdd, setSiteToAdd] = useState('');

	//  events
	const handleCategorySelect = (e: any) => {
		e.preventDefault();
		setSelectedCategory(e.target.dataset.category);
	}

	const addCategory = (e: any) => {
		e.preventDefault();
		const success = events.addCategory(categoryToAdd);
		if (success) setCategoryToAdd('');
	}

	const addSite = (e: any) => {
		e.preventDefault();
		const success = events.addSite(selectedCategory, siteToAdd);
		if (success) setSiteToAdd('');
	}

	const removeCategory = (e: any) => {
		e.preventDefault();
		const el = e.target.closest('.list-group-item');
		const category = el.dataset.category;
		events.removeCategory(category);
	}

	const removeSite = (e: any) => {
		e.preventDefault();
		const el = e.target.closest('.list-group-item');
		const site = el.dataset.site;
		events.removeSite(selectedCategory, site);
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
												<CategoryAdd categoryToAdd={categoryToAdd} onSubmit={addCategory} onInputChange={(e: any) => setCategoryToAdd(e.target.value)} />
												<CategoryList searchCategories={searchCategories} onCategoryClick={handleCategorySelect} onCategoryRemoveClick={removeCategory} />
											</Col>

											<Col>
												{/* Sites */}
												<SitesAdd siteToAdd={siteToAdd} selectedCategory={selectedCategory} onSubmit={addSite} onInputChange={(e: any) => setSiteToAdd(e.target.value)} />
												<SitesList searchList={searchList} selectedCategory={selectedCategory} onSiteRemoveClick={removeSite} />
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

		<style global jsx>{`
			.category-list,
			.sites-list {
				max-height: 500px;
				overflow-y: auto;
			}

			.category-list .close,
			.sites-list .close {
				text-decoration: none;
			}

			.category-list .list-group-item {
				cursor: pointer;
			}
		`}</style>
	</>);
}

export default Customize;