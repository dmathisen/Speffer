import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const CategoryAdd = ({ onSubmit, onInputChange }: any) => {
    return(<>
        <Form inline onSubmit={onSubmit}>
            <InputGroup className="mb-3">
                <Form.Control type="text" placeholder="Add Category" onChange={onInputChange}></Form.Control>
                <InputGroup.Append>
                    <Button type="submit" variant="success">+</Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    </>);
}

export default CategoryAdd;