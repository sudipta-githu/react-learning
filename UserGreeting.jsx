import PropTypes from 'prop-types';

function UserGreeting(props){

    const welcomemessage = <h2 className="welcome-message">
        welcome{props.username}</h2>
    
    const loginprompt = <h2 className="login-prompt">
        please log in to continue</h2>

   return(props.isLoggedIn ? welcomemessage : loginprompt);
                             

}
UserGreeting.prototype = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting