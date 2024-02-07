import './Notification.css';

function Notification({ user, pic, msg, time, content, link, commentedPic, className }) {
    return (
        <div className={`Notification ${className}`}>
            <div className='flex'>
                <img src={pic} alt="profile pic" />
                <div>
                    <div><a className="User" href="#">{user} </a><span className='Text'>{msg}</span> <a className="Link" href='#'>{link}</a></div>
                    <span className='Time'>{time} ago</span>
                    {content != null ? <div className='Content'>{content}</div> : null}
                </div>
            </div>
            {commentedPic ? <a href="#"><img src={commentedPic} alt="picture" /></a> : null}
        </div>
    );
}

export default Notification;