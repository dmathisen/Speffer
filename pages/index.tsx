import Head from 'next/head';
import dynamic from 'next/dynamic'

import SearchSettingsContextProvider from '../contexts/SearchSettingsContext';
import SearchEngineContextProvider from '../contexts/SearchEngineContext';

const SearchForm = dynamic(() => import('../components/SearchForm'), { ssr: false });
import Settings from '../components/Settings';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Index = () => {
	return(<>
		<Head>
			<title>Speffer - Search Engine Customization</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="" crossOrigin="anonymous" />
		</Head>

		<SearchSettingsContextProvider>
			<SearchEngineContextProvider>

				<Container>
					<Row className="text-center">
						<Col>
							<h1>Speffer</h1>
							<h2>Customize your searches to get better results...</h2>
							<SearchForm />
						</Col>
					</Row>
					
					<Row>
						<Col>
							<Settings />
						</Col>
					</Row>
				</Container>

			</SearchEngineContextProvider>
		</SearchSettingsContextProvider>

		<style global jsx>{`
			body {
				overflow-y: scroll;
				background-image: url(./images/bg.png);
			}

			h1 {
				margin: 3rem 0 2rem;
				font-size: 4rem;
				font-family: 'Maven Pro', sans-serif;
				font-weight: bold;
				color: #fff;
				text-shadow: 1px 1px 0 #333;
			}

			h2 {
				font-size: 1.25rem;
				color: #777;
				margin-bottom: 1rem;
			}
		`}</style>
	</>);
};

export default Index;