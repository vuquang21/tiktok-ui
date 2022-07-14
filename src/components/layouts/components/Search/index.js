import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import AccountItem from '../../../AccountItem';
import { SearchIcon } from '../../../icons';
import { Wrapper as PopperWrapper } from '../../../Popper';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);


const Search = () => {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)
    const inputRef = useRef()
    const handleHiddenResult = () => {
        setShowResult(false)
    }
    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([])
            return
        }
        setLoading(true)
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then(res => res.json())
            .then(res => {
                setSearchResult(res.data)
            })
            .catch(() => {
                setLoading(false)
            })
        setLoading(false)

    }, [searchValue]);
    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
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
                    onChange={(e) => setSearchValue(e.target.value)}
                    value={searchValue} />
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear} >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')}  >
                    <SearchIcon />
                </button>
            </div>



        </HeadlessTippy>
    )
}

export default Search