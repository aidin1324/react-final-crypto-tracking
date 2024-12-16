import './index.css';

function Typography(props) {
  const { textSize = 'md', className = '', children } = props;
  const typographyClasses = `typography typography--${textSize} ${className}`;

  return (
    <p className={typographyClasses}>
      {children}
    </p>
  );
}

export default Typography;