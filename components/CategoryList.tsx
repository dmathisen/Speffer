import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const CategoryList = ({ categories, onCategoryClick }: any) => {
    return(<>
        <ListGroup className="category-list">
            {
                categories.map((category: any, index: number) => (
                    <ListGroup.Item as="div" action onClick={onCategoryClick} key={index} data-category={category}>
                        <Button className="close" variant="link" aria-label="Close"><span aria-hidden="true">&times;</span></Button>
                        {category}
                    </ListGroup.Item>
                ))
            }
        </ListGroup>
    </>);
}

export default CategoryList;