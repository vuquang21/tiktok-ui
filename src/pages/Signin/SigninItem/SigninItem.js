import React from 'react'
import Button from '../../../components/Button'
import styles from './SigninItem.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const SigninItem = ({ title, icon, className, onClick, id }) => {
  const classes = cx('btn-login', {
    [className]: className
  })
  return (
    <Button
      id={id} 
      onClick={onClick}
      className={classes} 
      leftIcon={icon}>
      <span className='flex self-center'>{title}</span>
    </Button>
  )
}

export default SigninItem