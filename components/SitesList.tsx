import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const SitesList = ({ searchList, selectedCategory, onSiteRemoveClick }: any) => {
    return(<>
        <ListGroup className="sites-list" variant="flush">
            {
                selectedCategory?.length ? searchList[selectedCategory].map((site: any, index: number) => (
                    <ListGroup.Item as="div" action key={index} data-site={site}>
                        <Button onClick={onSiteRemoveClick} className="close" variant="link" aria-label="Close"><span aria-hidden="true">&times;</span></Button>
                        {site}
                    </ListGroup.Item>
                )) : ''
            }
        </ListGroup>
    </>);
}

export default SitesList;