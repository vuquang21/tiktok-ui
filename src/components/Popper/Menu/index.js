import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Wrapper as PopperWrapper } from '../index';
import Header from './Header';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

const defaultFunction = () => {

}


function Menu({ children, items = [], onChange }) {
  const [history, setHistory] = useState([{ data: items }])
  const onBack = () => {
    setHistory(prev => prev.slice(0, prev.length - 1))
  }
  const currentHistory = history[history.length - 1]
  const renderItem = () => {
    return currentHistory.data.map((item, index) => {
      const isParent = !!item.children
      return (
        <MenuItem key={index} data={item} onClick={() => {
          if (isParent) {
            setHistory(prev => [...prev, item.children])
          } else { 
            onChange(item)
          }
        }} />
      )
    })
  }
  return (
    <Tippy
      placement="bottom-end"
      interactive
      delay={[0, 600]}
      render={(attrs) => (
        <div className={cx('more-menu-item')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {history.length > 1 && <Header title='Language' onBack={onBack}  /> }
            {renderItem()}
          </PopperWrapper>
        </div>
      )}
      onHide = {() => setHistory(prev => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
