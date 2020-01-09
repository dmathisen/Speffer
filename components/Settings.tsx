import { useState } from 'react';

import CategoryList from './CategoryList';
import CategoryAdd from './CategoryAddForm';
import SitesList from './SitesList';
import SitesAdd from './SitesAddForm';

import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

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

			{/* Search Engine Selection */}
			<Card className="mb-4">
				<Card.Header>Search Engine</Card.Header>
				<Card.Body>
					<Form>
						<Form.Control as="select" onChange={(e: any) => events.onSearchEngineChange(e.target.value)}>
							<option value='google'>Google</option>
							<option value='duckDuckGo'>DuckDuckGo</option>
						</Form.Control>
					</Form>
				</Card.Body>
			</Card>

			<Row className="row-cols-1 row-cols-md-2">
				<Col className="mb-4">
					{/* Search Categories */}
					<Card>
						<Card.Header>Search Categories</Card.Header>
						<Card.Body>
							<CategoryAdd categoryToAdd={categoryToAdd} onSubmit={addCategory} onInputChange={(e: any) => setCategoryToAdd(e.target.value)} />
							<CategoryList searchCategories={searchCategories} onCategoryClick={handleCategorySelect} onCategoryRemoveClick={removeCategory} />
						</Card.Body>
					</Card>
				</Col>

				<Col className="mb-4">
					{/* Category Settings */}
					<Card>
						<Card.Header>Category Settings</Card.Header>
						<Card.Body>
							{ selectedCategory?.trim().length ? '' : 'Select a category to edit settings' }
							<SitesAdd siteToAdd={siteToAdd} selectedCategory={selectedCategory} onSubmit={addSite} onInputChange={(e: any) => setSiteToAdd(e.target.value)} />
							<SitesList searchList={searchList} selectedCategory={selectedCategory} onSiteRemoveClick={removeSite} />
						</Card.Body>
					</Card>
				</Col>
			</Row>

		</div>

		<style global jsx>{`
			.search-settings {
				max-height: 0;
				transition: max-height 0.25s ease-out;
				overflow: hidden;
			}
			.search-settings-visible {
				max-height: 1000px;
				transition: max-height 0.25s ease-in;
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

			.card-header {
				padding: .5rem .75rem;
			}
			.card-body {
				padding: .75rem;
			}
		`}</style>
	</>);
}

export default Settings;