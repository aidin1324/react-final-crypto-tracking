import "./index.css";

function Button(props) {
    const { variant = "primary", size = "medium", type = "button", onClick, disabled = false, children } = props;
    const buttonClasses = `my-button my-button--${variant} my-button--${size}`;

    return (
        <button
            className={buttonClasses}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;