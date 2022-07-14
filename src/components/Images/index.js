import { useState, forwardRef } from 'react';
import images from '../../assets/images';
import styles from './Images.module.scss'
import classNames from 'classnames/bind';


const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(images.noImage);
    };
    return <img className={classNames(styles.wrapper, className)} src={fallback || src} ref={ref} {...props} alt={alt} onError={handleError} />;
});

export default Image;
