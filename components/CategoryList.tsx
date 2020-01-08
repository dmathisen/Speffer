import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const CategoryList = ({ searchCategories, onCategoryClick, onCategoryRemoveClick }: any) => {
    return(<>
        <ListGroup className="category-list">
            {
                searchCategories.map((category: string, index: number) => (
                    <ListGroup.Item onClick={onCategoryClick} as="div" action key={index} data-category={category}>
                        <Button onClick={onCategoryRemoveClick} className="close" variant="link" aria-label="Close"><span aria-hidden="true">&times;</span></Button>
                        {category}
                    </ListGroup.Item>
                ))
            }
        </ListGroup>
    </>);
}

export default CategoryList;