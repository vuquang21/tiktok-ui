import styles from './HeaderOnly.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const HeaderOnly = () => {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>HeaderOnly</div>
    </header>
  );
};

export default HeaderOnly;
