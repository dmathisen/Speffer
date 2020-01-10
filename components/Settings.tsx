import { useState } from 'react';

import CategoryList from './CategoryList';
import CategoryAdd from './CategoryAddForm';
import SitesList from './SitesList';
import SitesAdd from './SitesAddForm';
import SearchEngineForm from './SearchEngineForm';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

const Settings = () => {
	const [ selectedCategory, setSelectedCategory ] = useState('');

	const handleCategorySelect = (e: any) => {
		e.preventDefault();
		setSelectedCategory(e.target.dataset.category);

		// handle active class
		e.target.parentElement.childNodes.forEach((el: HTMLElement) => el.classList.remove('active'))
		e.target.classList.add('active');
	}

	const handleCategoryAdd = (category: string) => {
		setSelectedCategory(category);
		(document.querySelector('.add-site') as HTMLElement).focus();
	}

	return (<>
		<div className="search-settings mt-5">

			{/* Search Engine Selection */}
			<Card className="mb-4">
				<Card.Header>
					<Badge variant="secondary" className="mr-2">1</Badge>
					Set your preferred search engine
				</Card.Header>
				<Card.Body>
					<SearchEngineForm />
				</Card.Body>
			</Card>

			<Row className="row-cols-1 row-cols-md-2">
				<Col className="mb-4">
					{/* Search Categories */}
					<Card>
						<Card.Header>
							<Badge variant="secondary" className="mr-2">2</Badge>
							Set up your search categories
						</Card.Header>
						<Card.Body>
							<CategoryAdd handleCategoryAdd={handleCategoryAdd} />
							<CategoryList handleCategorySelect={handleCategorySelect} />
						</Card.Body>
					</Card>
				</Col>

				<Col className="mb-4">
					{/* Category Settings */}
					<Card>
						<Card.Header>
							<Badge variant="secondary" className="mr-2">3</Badge>
							Customize websites to search
						</Card.Header>
						<Card.Body>
							{ selectedCategory?.trim().length ? '' : 'Select a category to edit settings' }

							<SitesAdd selectedCategory={selectedCategory} />
							<SitesList selectedCategory={selectedCategory} />
						</Card.Body>
					</Card>
				</Col>
			</Row>

		</div>

		<style global jsx>{`
			.search-settings {
				max-height: 0;
				transition: max-height 0.35s ease-out;
				overflow: hidden;
			}
			.search-settings-visible {
				max-height: 1000px;
				transition: max-height 0.35s ease-in;
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

			.list-group-item {
				padding: .5rem 1rem;
			}

			.list-group-item.active {
				background-color: #28a745;
				border-color: #28a745;
			}
		`}</style>
	</>);
}

export default Settings;