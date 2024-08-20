import proptypes from 'prop-types';

function UserGreeting(props) {
    const message1 =   <>
    <h1 className='jjj' >UserName: {props.username}</h1>
    <h1 className='jjj'>isLoggedIn: {props.isLoggedIn?"YES": "NO"  }</h1>
    </>;
    const message2 = <h1 className='jjjj'>Continue to log in </h1>;
//ternary operator
    return(props.isLoggedIn ? message1: message2);
    if (props.isLoggedIn)
    {
        return (  message1 );
    }
    return ( message2 );
}

UserGreeting.propTypes = {
        isLoggedIn: proptypes.bool,
        username: proptypes.string,
    };
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
    };
export default UserGreeting;