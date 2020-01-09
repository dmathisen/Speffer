import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const CategoryAdd = ({ categoryToAdd, onSubmit, onInputChange }: any) => {
    return(<>
        <Form onSubmit={onSubmit}>
            <InputGroup className="mb-3">
                <Form.Control type="text" placeholder="Add Category" onChange={onInputChange} value={categoryToAdd}></Form.Control>
                <InputGroup.Append>
				<Button type="submit" variant="success"><strong>+</strong> <span className="sr-only">add category</span></Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    </>);
}

export default CategoryAdd;