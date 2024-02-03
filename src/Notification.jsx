import './Notification.css';

function Notification({ pic, name, time }) {
    return (
        <div className='Notification'>
            <img src={pic} alt="profile pic" />
            <div>
                <div><a href="#">{name}</a> <span className='Text'>esto es una notificación</span></div>
                <span className='Time'>{time} ago</span>
            </div>
        </div>
    );
}

export default Notification;