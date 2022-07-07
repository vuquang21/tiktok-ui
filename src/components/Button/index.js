import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  children,
  text,
  primary,
  outline = false,
  small = false,
  large = false,
  disable,
  rounded,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let ComponentButton = 'button';
  const classes = cx('wrapper', {
    primary,
    outline,
    small,
    large,
    text,
    disable,
    rounded,
    [className]: className,
  });
  const props = {
    onClick,
    ...passProps,
  };
  if (disable) { 
    delete props.onClick
  }
  if (to) {
    props.to = to;
    ComponentButton = Link;
  } else if (href) {
    props.href = href;
    ComponentButton = 'a';
  }
  return (
    <ComponentButton className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </ComponentButton>
  );
}

export default Button;
