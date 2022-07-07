import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '../index';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import 'tippy.js/animations/scale.css';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  return (
    <Tippy
      placement="bottom-end"
      interactive
      delay={[0, 600]}
      render={(attrs) => (
        <div className={cx('more-menu-item')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {items.map((item, index) => (
              <MenuItem key={index} data={item} />
            ))}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
