import Head from 'next/head';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';

const Index = () => (
	<>
		<Head>
			<title>Speffer - Site Search Specifier</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
		</Head>
		
		<Header />
		<SearchForm />

		<style global jsx>{`
			body {
				background-image: url(/images/bg.png);
			}
		`}</style>
	</>
);

export default Index;