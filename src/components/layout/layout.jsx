import { Helmet } from 'react-helmet';
import Footer from '../footer/footer';
import Header from '../header/header';

export default function Layout({ children, title }) {
	return (
		<>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<Header title={title} />
			<main>{children}</main>

			<Footer />
		</>
	);
}
