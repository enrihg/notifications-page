import { useState } from 'react';
import './Notification.css';

function Notification({ user, pic, msg, time }) {
    const [isUnread, setRead] = useState(true);
    const read = () => setRead(!isUnread);

    return (
        <div className={`Notification ${isUnread ? 'Unread' : 'Read'}`} onClick={isUnread ? read : null}>
            {console.log(isUnread)}
            <img src={pic} alt="profile pic" />
            <div>
                <div><a href="#">{user}</a> <span className='Text'>{msg}</span></div>
                <span className='Time'>{time} ago</span>
            </div>
        </div>
    );
}

export default Notification;