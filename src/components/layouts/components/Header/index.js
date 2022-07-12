import { faArrowRightFromBracket, faCircleQuestion, faCircleXmark, faCloudUpload, faCoins, faEarthAmerica, faEllipsisVertical, faGear, faKeyboard, faMagnifyingGlass, faMessage, faPlus, faSpinner, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import images from '../../../../assets/images';
import AccountItem from '../../../AccountItem';
import Button from '../../../Button';
import { Wrapper as PopperWrapper } from '../../../Popper';
import Menu from '../../../Popper/Menu';
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
  const [searchResult, setSearchResult] = useState([]);
  const [currentUser, setCurrentUser] = useState(true)
  console.log(currentUser);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  // handle logic 
  const handleMenuChange = () => {

  }

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="TikTok" />
        </div>
        <HeadlessTippy
          interactive
          visible={searchResult.length}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search account and video" spellCheck="false" />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>

            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 100]} content='Upload video' placement='bottom' >
                <button className={cx('actions-btn')}>
                  <FontAwesomeIcon icon={faCloudUpload} />
                </button>
              </Tippy>
              <Tippy delay={[0, 100]} content='Message' placement='bottom' >
                <button className={cx('actions-btn')}>
                  <FontAwesomeIcon icon={faMessage} />
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

          <Menu items={currentUser ? USER_ITEMS : MENU_ITEMS} onChange={handleMenuChange} >
            {currentUser === true ? (
              <img
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
