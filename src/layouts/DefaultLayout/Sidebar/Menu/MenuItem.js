import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)
const MenuItem = ({ title, icon, activeIcon, to }) => {
    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            <span className={(cx('icon'))}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    )
}
MenuItem.prototype = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    to: PropTypes.node.isRequired,
}

export default MenuItem