import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import images from '../../assets/images';
import Image from '../Images';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function AccountItem({ data }) {

  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <Image className={cx('avatar')} src={data.avatar || images.userAvt} alt="" />
      <div className={cx('info')}>
        <p className={cx('name')}>{data.nickname} {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} /> } </p>
        <span className={cx('username')}>{data.full_name}</span>
      </div>
    </Link>
  );
}

export default AccountItem;


