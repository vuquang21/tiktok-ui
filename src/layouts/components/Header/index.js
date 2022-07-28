import { faArrowRightFromBracket, faCircleQuestion, faCoins, faEarthAmerica, faEllipsisVertical, faGear, faKeyboard, faPlus, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';

import { useContext } from 'react';
import images from '../../../assets/images';
import Button from '../../../components/Button';
import { InboxIcon, MessageIcon, UploadIcon } from '../../../components/icons';
import Image from '../../../components/Images';
import Menu from '../../../components/Popper/Menu';
import config from '../../../config';
import { SigninContext } from '../../../context/signin';
import { UserContext } from '../../../context/user';
import { auth, authSignOut } from '../../../firebase/config';
import Search from '../Search';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAmerica} />, title: 'English', children: {
      title: 'Language',
      data: [
        { type: 'language', code: 'en', title: 'English' },
        { type: 'language', code: 'vi', title: 'Tiếng Việt' },

      ]
    }
  },
  { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and help', to: '/feedback' },
  { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' },
]

const USER_ITEMS = [
  { icon: <FontAwesomeIcon icon={faUserAlt} />, title: 'View profile', to: '/profile' },
  { icon: <FontAwesomeIcon icon={faCoins} />, title: 'Get coins', to: '/coin' },
  { icon: <FontAwesomeIcon icon={faGear} />, title: 'Setting', to: '/setting' },
  ...MENU_ITEMS,
  { icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />, title: 'Log out', to: '/', separate: true, },
]
const Header = () => {
  const dataUser = useContext(UserContext)
  
  const handleSignal = useContext(SigninContext)
  // handle logic 
  const handleMenuChange = () => {

  }

  // sign in
  const handleSignIn = () => {
    handleSignal.handleSignalSignin()
  }
  // sign out
  const handleSignOut = (index) => {
    console.log(dataUser.user);
    if (index === 6) { 
      authSignOut()
    }
  }

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo')}>
          <img src={images.logo} alt="TikTok" />
        </Link>
        <div>
          <Search />
        </div>
        <div className={cx('actions')}>
          {dataUser.user ? (
            <>
              <Tippy delay={[0, 100]} content='Upload video' placement='bottom' >
                <button className={cx('actions-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 100]} content='Message' placement='bottom' >
                <button className={cx('actions-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 100]} content='Inbox' placement='bottom' >
                <button className={cx('actions-btn')}>
                  <InboxIcon className={cx('supbage')} />
                </button>

              </Tippy>
            </>
          ) : (
            <div className='flex flex-row gap-4 h-[36px]'>
              <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </Button>
              <Button primary onClick={handleSignIn}>Log in</Button>

            </div>
          )}

          <Menu items={dataUser.user ? USER_ITEMS : MENU_ITEMS} onChange={handleMenuChange} onClick={(index) => handleSignOut(index)} >
            {dataUser.user ? (
              <Image
                src={images.userAvt}
                className={cx('user-avt')}
                alt='Nguyen Van A' />

            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>






        </div>

      </div>

    </header >
  );
};

export default Header;
