import { useContext } from 'react';
import { SearchSettingsContext } from '../contexts/SearchSettingsContext';

import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const SitesList = ({ selectedCategory }: any) => {
    const { searchSettings, removeSite } = useContext(SearchSettingsContext as any);

    return(<>
        <ListGroup className="sites-list" variant="flush">
            {
                selectedCategory?.length ? searchSettings[selectedCategory].map((site: any, index: number) => (
                    <ListGroup.Item as="div" action key={index} data-site={site}>
                        <Button onClick={() => removeSite(selectedCategory, site)} className="close" variant="link" aria-label="Close"><span aria-hidden="true">&times;</span></Button>
                        {site}
                    </ListGroup.Item>
                )) : ''
            }
        </ListGroup>
    </>);
}

export default SitesList;