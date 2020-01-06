import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
	return(<>
		<Container>
			<Row className="text-center">
				<Col>
					<h1>Speffer</h1>
				</Col>
			</Row>
		</Container>

		<style jsx>{`
			h1 {
				margin: 20px 0;
				font-size: 48pt;
				font-family: 'Maven Pro', sans-serif;
				font-weight: bold;
				color: #fff;
				text-shadow: 1px 1px 0 #333;
			}
		`}</style>
	</>);
};

export default Header;