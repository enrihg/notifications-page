import Notification from './Notification';
import './App.css';

const data = [
  {
    id: 0,
    user: 'Mark Webber',
    pic: './src/assets/images/avatar-mark-webber.webp',
    msg: 'reacted to your recent post My first tournament today',
    time: '1m',
    unread: true /*es necesario? */
  },

  {
    id: 1,
    user: 'Angela Gray',
    pic: './src/assets/images/avatar-angela-gray.webp',
    msg: 'followed you',
    time: '5m',
    unread: true /*es necesario? */
  },

  {
    id: 2,
    user: 'Jacob Thompson',
    pic: './src/assets/images/avatar-jacob-thompson.webp',
    msg: 'has joined your group Chess Club',
    time: '1 day',
    unread: true /*es necesario? */
  },

  {
    id: 3,
    user: 'Rizky Hasanuddin',
    pic: './src/assets/images/avatar-rizky-hasanuddin.webp',
    msg: 'sent you a private message',
    time: '5 days',
    unread: true /*es necesario? */
  },

  {
    id: 4,
    user: 'Kimberly Smith',
    pic: './src/assets/images/avatar-kimberly-smith.webp',
    msg: 'commented on your picture',
    time: '1 week',
    unread: true  /*es necesario? */
  },

  {
    id: 5,
    user: 'Nathan Peterson',
    pic: './src/assets/images/avatar-nathan-peterson.webp',
    msg: 'reacted to your recent post 5 end-game strategies to increase your win rate',
    time: '2 weeks',
    unread: true /*es necesario? */
  },

  {
    id: 6,
    user: 'Anna Kim',
    pic: './src/assets/images/avatar-anna-kim.webp',
    msg: 'left the group Chess Club',
    time: '2 weeks',
    unread: true  /*es necesario? */
  },

]


function App() {

  return (
    <div className='Wrapper'>
      <header>
        <div>
          <h1>Notifications</h1>
          <span className='Counter'>3</span>
        </div>
        <button>Mark all as read</button>
      </header>

      {data.map(person =>
      <Notification key={person.id} user={person.user} pic={person.pic} msg={person.msg} 
      time={person.time} />)}

    </div>
  )
}

export default App
