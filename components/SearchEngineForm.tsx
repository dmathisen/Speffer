import { useContext } from 'react';
import { SearchEngineContext } from '../contexts/SearchEngineContext';

import Form from 'react-bootstrap/Form';

const SearchEngineForm = () => {
    const { setSearchEngine }: any = useContext(SearchEngineContext as any);

    return (<>
        <Form>
            <Form.Control as="select" onChange={(e: any) => setSearchEngine(e.target.value)}>
                <option value='google'>Google</option>
                <option value='duckDuckGo'>DuckDuckGo</option>
            </Form.Control>
        </Form>
    </>)
}

export default SearchEngineForm;