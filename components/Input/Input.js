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
          rows={inputProps.rows}
          className={styles.input}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          defaultValue={value}
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
            className={classNames(styles.input, styles[size])}
            type="text"
            name={name}
            placeholder={placeholder}
            defaultValue={value}
            disabled={disabled}
          />
          {endIcon && <span className="material-icons md-18">{endIcon}</span>}
        </span>
      )}
      {helperText && <span className={styles.helperText}>{helperText}</span>}
    </div>
  );
}
