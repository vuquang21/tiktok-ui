import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Button from '../../Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  const classes = cx('item-btn', {
    separate: data.separate,
  })
  return <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>{data.title}</Button>;
}

export default MenuItem;
