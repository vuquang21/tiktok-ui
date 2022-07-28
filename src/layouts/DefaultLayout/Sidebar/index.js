import classNames from 'classnames/bind';
import { GroupUserIcon, GroupUserActiveIcon, HomeIcon, HomeActiveIcon, LiveIcon, LiveActiveIcon } from '../../../components/icons';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import config from '../../../config';
import { Introduce } from './Introduce';
import { Suggest } from './Suggest';
const cx = classNames.bind(styles);

const Sidebar = () => {
	return (
		<aside className={cx('wrapper')}>
			<Menu>
				<MenuItem
					title='For You'
					icon={<HomeIcon />}
					activeIcon={<HomeActiveIcon />}
					to={config.routes.home}
					/>
				<MenuItem
					title='Following'
					icon={<GroupUserIcon />}
					activeIcon={<GroupUserActiveIcon />}
					to={config.routes.following}
					/>
				<MenuItem
					title='LIVE'
					icon={<LiveIcon />}
					activeIcon={<LiveActiveIcon />}
					to={config.routes.live}
					/>
			</Menu>
			<Introduce />
			<Suggest />
			<h1>Sidebar</h1>
		</aside>
	);
};

export default Sidebar;
