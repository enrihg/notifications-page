import './Notification.css';

function Notification({ user, pic, msg, time, className}) {

    return (
        <div className={className}>
            <img src={pic} alt="profile pic" />
            <div>
                <div><a href="#">{user}</a> <span className='Text'>{msg}</span></div>
                <span className='Time'>{time} ago</span>
            </div>
        </div>
    );
}

export default Notification;