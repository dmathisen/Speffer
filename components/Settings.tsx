import { useState } from 'react';

import CategoryList from './CategoryList';
import CategoryAdd from './CategoryAddForm';
import SitesList from './SitesList';
import SitesAdd from './SitesAddForm';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Settings = ({ searchCategories, searchList, events }: any) => {
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
		<div className="search-settings">
			<Container>
				<Row>
					<Col>

						{/* Search Engine Selection */}
						<Form>
							<Form.Group as={Row} controlId="formHorizontalEmail">
								<Form.Label column sm={2}>Search Engine</Form.Label>
								<Col sm={10}>
									<Form.Control as="select" className="mr-2" onChange={(e: any) => events.onSearchEngineChange(e.target.value)}>
										<option value='google'>Google</option>
										<option value='duckDuckGo'>DuckDuckGo</option>
									</Form.Control>
								</Col>
							</Form.Group>
						</Form>

					</Col>
				</Row>

				<Row className="mb-3">
					<Col><hr /></Col>
				</Row>

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
		</div>

		<style global jsx>{`
			.search-settings {
				margin-top: 30px;
				max-height: 0;
				transition: max-height 0.25s ease-out;
				overflow: hidden;
				background: #fff;
				border-radius: 8px;
			}
			.search-settings-visible {
				max-height: 540px;
				transition: max-height 0.25s ease-in;
			}

			.search-settings .container {
				padding: 20px;
			}

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

export default Settings;