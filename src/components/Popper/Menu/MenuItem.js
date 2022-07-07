import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Button from '../../Button';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
  return <Button className={cx('item-btn')} leftIcon={data.icon} to={data.to}>{data.title}</Button>;
}

export default MenuItem;