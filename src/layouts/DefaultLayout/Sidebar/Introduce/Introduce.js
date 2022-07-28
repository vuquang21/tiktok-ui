import React, { useContext } from 'react'
import styles from './Introduce.module.scss'
import classNames from 'classnames/bind'
import Button from '../../../../components/Button'
import { SigninContext } from '../../../../context/signin'

const cx = classNames.bind(styles)

const Introduce = () => {
    const valueSignin = useContext(SigninContext)
    const handleClickSignin = () => {
        valueSignin.handleSignalSignin()
    }
    return (
        <div className={cx('wrapper')}>
            <span className={cx('title')}>Log in to follow creators, like videos, and view comments.</span>
            <Button className={cx('btn-login')} onClick={handleClickSignin}>Log in</Button>
        </div>
    )
}

export default Introduce