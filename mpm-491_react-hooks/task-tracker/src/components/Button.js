import PropTypes from 'prop-types'

const Button = ({ onClick, color, text }) => {
	return (
		<button
			onClick={onClick}
			style={{ backgroundColor: color }}
			className="btn"
		>
			{text}
		</button>
	)}

Button.defaultProps = {
	color: "steelblue"
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
}
export default Button