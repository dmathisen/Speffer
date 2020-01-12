import { useContext } from 'react';
import { SearchSettingsContext } from '../contexts/SearchSettingsContext';

import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const CategoryList = ({ handleCategorySelect }: any) => {
    const { searchCategories, removeCategory } = useContext(SearchSettingsContext as any);

    return(<>
        <ListGroup className="category-list">
            {
                searchCategories.map((category: string, index: number) => (
                    <ListGroup.Item onClick={(e: any) => handleCategorySelect(e.target.dataset.category)} as="div" action key={index} data-category={category}>
                        <Button onClick={() => removeCategory(category)} className="close" variant="link" aria-label="Close"><span aria-hidden="true">&times;</span></Button>
                        {category}
                    </ListGroup.Item>
                ))
            }
        </ListGroup>
    </>);
}

export default CategoryList;