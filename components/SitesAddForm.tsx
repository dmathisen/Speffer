import { useState, useContext } from 'react';
import { SearchSettingsContext } from '../contexts/SearchSettingsContext';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SitesAdd = ({ selectedCategory }: any) => {
    const { addSite } = useContext(SearchSettingsContext as any);
    const [ site, setSite ] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        addSite(selectedCategory, site);
        setSite('');
    }

    return(<>
        <Form onSubmit={handleSubmit} style={{visibility: selectedCategory?.trim().length ? 'visible' : 'hidden' }}>
            <InputGroup className="mb-3">
                <Form.Control type="text" placeholder="Add Site (ex: reddit.com)" onChange={(e: any) => setSite(e.target.value)} value={site}></Form.Control>
                <InputGroup.Append>
                    <Button type="submit" variant="success"><strong>+</strong> <span className="sr-only">add site</span></Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    </>);
}

export default SitesAdd;