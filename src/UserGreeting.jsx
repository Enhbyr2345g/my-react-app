import PropTypes from "prop-types"

function UserGreeting(props)
{
    const welcomeStyle = {
        frontSize: "2.5em",
        backgroundColor: "hsl(120, 100%, 42%)",
        color : "white",
        padding:"10px",
        borderRadus: "5px",
        margin:"0"
    }
    const loginPromt = {
        frontSize: "2.5em",
        backgroundColor: "hsl(0, 100%, 42%)",
        color : "white",
        padding:"10px",
        borderRadus: "5px",
        margin:"0"
    }
    const welcomeHtml = <h2 style={welcomeStyle}>
            Welcome {props.username}
        </h2>
    const loginPromtHtml = <h2 style={loginPromt}>
            Please log in to continue
        </h2>
    
    return (props.isLoggendIn) ? welcomeHtml : loginPromtHtml;
}

UserGreeting.proptypes = {
    isLoggendIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggendIn: true,
    username: "Guest"
}

export default UserGreeting