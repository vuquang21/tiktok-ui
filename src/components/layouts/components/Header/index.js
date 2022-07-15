import { faArrowRightFromBracket, faCircleQuestion, faCoins, faEarthAmerica, faEllipsisVertical, faGear, faKeyboard, faPlus, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { useState } from 'react';
import 'tippy.js/dist/tippy.css';

import images from '../../../../assets/images';
import Button from '../../../Button';
import { InboxIcon, MessageIcon, UploadIcon } from '../../../icons';
import Image from '../../../Images';
import Menu from '../../../Popper/Menu';
import Search from '../Search';
import styles from './Header.module.scss';
import routesConfig from '../../../../config/routes';

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

  const [currentUser, setCurrentUser] = useState(true)


  // handle logic 
  const handleMenuChange = () => {

  }

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={routesConfig.home} className={cx('logo')}>
          <img src={images.logo} alt="TikTok" />
        </Link>
        <div>
          <Search />
        </div>
        <div className={cx('actions')}>
          {currentUser ? (
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
            <>
              <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </Button>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu items={currentUser ? USER_ITEMS : MENU_ITEMS} onChange={handleMenuChange}  >
            {currentUser === true ? (
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
