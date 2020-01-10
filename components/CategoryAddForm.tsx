import { useState, useContext } from 'react';
import { SearchSettingsContext } from '../contexts/SearchSettingsContext';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const CategoryAdd = () => {
    const { addCategory } = useContext(SearchSettingsContext as any);
    const [ category, setCategory ] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        addCategory(category);
        setCategory('');
    }

    return(<>
        <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
                <Form.Control type="text" placeholder="Add Category" onChange={(e: any) => setCategory(e.target.value)} value={category}></Form.Control>
                <InputGroup.Append>
				<Button type="submit" variant="success"><strong>+</strong> <span className="sr-only">add category</span></Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    </>);
}

export default CategoryAdd;