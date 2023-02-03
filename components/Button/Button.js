import styles from "@/styles/Button.module.scss";
import classnames from "classnames";

export default function Button({
  color,
  disabled,
  disableShadow,
  endIcon,
  size,
  startIcon,
  variant,
  children,
  ...buttonProps // Other button props like role
}) {
  return (
    <button
      {...buttonProps}
      className={classnames(
        styles.button,
        styles[color] || styles.default,
        styles[variant],
        styles[size]
      )}
      disabled={disabled}
      data-disable-shadow={disableShadow}
    >
      {startIcon && <span className="material-icons md-14">{startIcon}</span>}
      {children}
      {endIcon && <span className="material-icons md-14">{endIcon}</span>}
    </button>
  );
}
