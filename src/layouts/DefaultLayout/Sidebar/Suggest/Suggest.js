import React from 'react'
import classNames from 'classnames/bind'
import styles from './Suggest.module.scss'

const cx = classNames.bind(styles)


const Suggest = () => {
	return (
		<div className={cx('wrapper')}>
			<div>
				<span className={cx('title')}>Suggested accounts</span>
			</div>
			<div className={cx('list-user')}>
			
			</div>
			<h1>Suggest</h1>
		</div>
	)
}

export default Suggest