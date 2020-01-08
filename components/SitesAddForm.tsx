import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SitesAdd = ({ siteToAdd, selectedCategory, onSubmit, onInputChange }: any) => {
    return(<>
        <Form inline onSubmit={onSubmit} style={{visibility: selectedCategory?.trim().length ? 'visible' : 'hidden' }}>
            <InputGroup className="mb-3">
                <Form.Control type="text" placeholder="Add Site (ex: reddit.com)" onChange={onInputChange} value={siteToAdd}></Form.Control>
                <InputGroup.Append>
                    <Button type="submit" variant="success">+</Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    </>);
}

export default SitesAdd;