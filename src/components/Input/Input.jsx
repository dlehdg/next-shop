import classNames from "classnames";
import React, { useState } from "react";
import Icon from "../icon/Icon";

import styles from './Input.module.scss'

const Input = ({
  id,
  label,
  name = "",
  labelVisible,
  icon,
  email,
  password,
  placeholder = "",
  readOnly,
  disabled,
  value,
  error: errorProp,
  className = "",
  onChange,
  ...restProps
}) => {

  const [inputValue, setinputValue] = useState(value ? value : '');

  const [isPasswordVisible, setisPasswordVisible] = useState(false);


  const checkType = () => {
    if(email) {
      return 'email'
    }

    if(password) {
      return 'password'
    }

    return 'text';
    }

  const handleChange = (e) => {
    setinputValue(e.target.value);
    onChange(e);
  }

  const iconType = isPasswordVisible ? 'show' : 'hide';
  const iconLabel = `비밀번호 ${isPasswordVisible ? '표시' : '감춤'}`

  return (
      <div className={classNames(styles.formControl, className)}>
        <label>
            {label}
        </label>

        <div className={classNames(styles.inputWrapper, errorProp && styles.inputWrapperError )}>
        {icon ? <Icon /> : null}
        <input
          id={id}
          type={checkType()}
          name={name}
          className={classNames(styles.input)}
          placeholder={placeholder}
          readOnly={readOnly}
          disabled={disabled}
          value={inputValue}
          onChange={handleChange}
          {...restProps}
        />

        {password ? (
          <button
            type="button"
            className={styles.button}
            onClick={() => setisPasswordVisible(prev => !prev)}
          >
          <Icon type={iconType} alt= {iconLabel} title={iconLabel} />
          </button>
        ) : null}
      </div>

      {errorProp && (
        <span role="alert" className={style.error}>
          {errorProp}
        </span>
      )}

      </div>

  );
};

export default Input;
