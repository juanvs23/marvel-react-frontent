import { Helmet } from 'react-helmet';
import Footer from '../footer/footer';
import Header from '../header/header';
import LateralMenu from '../lateralMenu/lateralMenu';
import { useDispatch, useSelector } from 'react-redux';
import './layout.scss';

export default function Layout({ children, title }) {
	const { isOpen, isDark } = useSelector((state) => state.userInterface);
	const menuActive = isOpen ? 'menu-active' : '';

	return (
		<>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<div className={`iso-body ${menuActive} ${isDark}`}>
				<div className='body-wrapper'>
					<Header title={title} />
					<main>{children}</main>
					<Footer />
				</div>
				<LateralMenu />
			</div>
		</>
	);
}
