import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const SitesList = ({ selectedCategorySites }: any) => {
    return(<>
        <ListGroup className="sites-list" variant="flush">
            {
                selectedCategorySites && selectedCategorySites.length ? selectedCategorySites.map((site: any, index: number) => (
                    <ListGroup.Item as="div" action key={index}>
                        <Button className="close" variant="link" aria-label="Close"><span aria-hidden="true">&times;</span></Button>
                        {site}
                    </ListGroup.Item>
                )) : ''
            }
        </ListGroup>
    </>);
}

export default SitesList;