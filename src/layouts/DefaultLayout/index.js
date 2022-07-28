import Header from '../components/Header';
import Sidebar from './Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { Signin } from '../../pages/Signin';
import { SigninContextProvider } from '../../context/signin';

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
  return (
    <SigninContextProvider>
      <div className={cx('wrapper')}>
        <Header />
        <div className={cx('container')}>
          <Sidebar />
          <div className={cx('content')}>
            {children}
            <div className={cx('menu-sigin')}>
              <Signin />
            </div>
          </div>
        </div>

      </div>
    </SigninContextProvider>
  );
};

export default DefaultLayout;
