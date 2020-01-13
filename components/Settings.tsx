import { useState } from 'react';
import dynamic from 'next/dynamic'

import CategoryAdd from './CategoryAddForm';
import SitesList from './SitesList';
import SitesAdd from './SitesAddForm';

const SearchEngineForm = dynamic(() => import('./SearchEngineForm'), { ssr: false });
const CategoryList = dynamic(() => import('./CategoryList'), { ssr: false });

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

const Settings = () => {
	const [ selectedCategory, setSelectedCategory ] = useState('');

	const handleCategorySelect = (category: string) => {
		setSelectedCategory(category);

		// wait until category item is added to DOM
		setTimeout(() => {
			// handle active class
			const categoryItems = document.querySelectorAll('.category-list .list-group-item');
			Array.from(categoryItems).forEach((el: any) => el.classList.remove('active'));
			document.querySelector(`.category-list [data-category="${category}"]`)?.classList.add('active');

			// focus on 'add site'
			(document.querySelector('.add-site') as HTMLElement).focus();
		}, 0);
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
							<CategoryAdd handleCategorySelect={handleCategorySelect} />
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
							{ selectedCategory?.trim().length ? ` (${selectedCategory})` : '' }
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