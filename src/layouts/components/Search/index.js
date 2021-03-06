import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import { useDebounce } from '../../../hooks';
import AccountItem from '../../../components/AccountItem';
import { SearchIcon } from '../../../components/icons';
import { Wrapper as PopperWrapper } from '../../../components/Popper';
import { search as searchService } from '../../../services/search';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);


const Search = () => {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    const debounced = useDebounce(searchValue, 500);

    const handleHiddenResult = () => {
        setShowResult(false);
    }
    const handleChange = (e) => {
        const searchValue = e.target.value
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue)
        }
    }
   
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        const fetAPI = async () => {
            const dataResult = await searchService(debounced, 'less')
            setSearchResult(dataResult)
            setLoading(false)
        }
        fetAPI()
    }, [debounced]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }
    return (
        <HeadlessTippy
            onClickOutside={handleHiddenResult}
            interactive
            visible={showResult && searchResult.length}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map(result => (
                            <AccountItem
                                key={result.id}
                                data={result}
                            />
                        ))}
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    onFocus={() => setShowResult(true)}
                    ref={inputRef}
                    placeholder="Search accounts and videos"
                    spellCheck="false"
                    onChange={handleChange}
                    value={searchValue} />
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear} >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()}  >
                    <SearchIcon />
                </button>
            </div>



        </HeadlessTippy>
    )
}

export default Search