import { useDispatch, useSelector } from 'react-redux';
import SwitchComponent from '../swithComponent/switchComponent';
import './lateralMenu.scss';
import { NavLink } from 'react-router-dom';
import { setTitle, setOpenMnu } from '@/lib/redux';
import { userInterfaceOptions } from '@/constants';

function LateralMenu() {
	const dispatch = useDispatch();
	const { isOpen, isDark } = useSelector((state) => state.userInterface);
	const handlerClick = () => {
		dispatch(setOpenMnu());
	};
	const openMenu = isOpen ? 'menu-open' : '';
	return (
		<aside className={`sidebar-menu ${openMenu} ${isDark}`}>
			<div className='sidebar-container'>
				<div className='sidemenu'>
					<div className='sidebar-title'>
						<h2>View List</h2>
					</div>
					<nav className='sidebar-nav'>
						<ul>
							<li onClick={handlerClick} className='sidebar-item'>
								<NavLink to='/'>Characters</NavLink>
							</li>
							<li onClick={handlerClick} className='sidebar-item'>
								<NavLink to='/comics'>Comics</NavLink>
							</li>
							<li onClick={handlerClick} className='sidebar-item'>
								<NavLink to='/series'>Series</NavLink>
							</li>
							<li onClick={handlerClick} className='sidebar-item'>
								<NavLink to='/events'>Events</NavLink>
							</li>
						</ul>
					</nav>

					<div className='show-mobile'>
						<div className='mobilepanel'>
							<h4 className='menu-title'>
								{isDark === userInterfaceOptions.isDarkTheme.light
									? 'Active Dark Mode'
									: 'Active Light Mode'}
							</h4>
							<div className='dark-mode-content'>
								<SwitchComponent />
							</div>
						</div>
					</div>
				</div>
			</div>
		</aside>
	);
}

export default LateralMenu;
