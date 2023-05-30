import styles from "@/styles/Input.module.scss";
import classNames from "classnames";

export default function Input({
  disabled,
  endIcon,
  error,
  fullWidth,
  helperText,
  label,
  multiline,
  name,
  placeholder,
  size,
  startIcon,
  value,
  onChange,
  ...inputProps
}) {
  return (
    <div className={classNames(styles.container, { [styles.error]: error })}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      {multiline && inputProps?.rows && (
        <textarea
          {...inputProps}
          rows={inputProps.rows}
          className={styles.input}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange}
        ></textarea>
      )}
      {!multiline && (
        <span
          className={classNames(styles.inputContainer, {
            [styles.fullWidth]: fullWidth,
          })}
        >
          {startIcon && (
            <span
              className={classNames("material-icons", "md-18", styles[size])}
            >
              {startIcon}
            </span>
          )}
          <input
            {...inputProps}
            className={classNames(styles.input, styles[size])}
            type="text"
            name={name}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={onChange}
          />
          {endIcon && <span className="material-icons md-18">{endIcon}</span>}
        </span>
      )}
      {helperText && <span className={styles.helperText}>{helperText}</span>}
    </div>
  );
}
