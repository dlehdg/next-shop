import classNames from "classnames";
import React from "react";
import Icon from "../icon/Icon";

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

  const [inputValue, setinputValue] = useState(valye ? value : '');

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

  return (
      <div className={classNames(styles.formControl, className)}>
        <label>
            {label}
        </label>

        <div className={classNames(styles.inputWrapper, errorProp && styles.inputWrapperError )}></div>
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

          </button>
        ) : null}
      </div>

  )
};

export default Input;
