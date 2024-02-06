import { useState } from 'react';
import Notification from './Notification';
import './App.css';

const data = [
  {
    id: 0,
    user: 'Mark Webber',
    pic: './src/assets/images/avatar-mark-webber.webp',
    msg: 'reacted to your recent post My first tournament today',
    time: '1m',
    unread : true
  },

  {
    id: 1,
    user: 'Angela Gray',
    pic: './src/assets/images/avatar-angela-gray.webp',
    msg: 'followed you',
    time: '5m',
    unread : true
  },

  {
    id: 2,
    user: 'Jacob Thompson',
    pic: './src/assets/images/avatar-jacob-thompson.webp',
    msg: 'has joined your group Chess Club',
    time: '1 day',
    unread : true
  },

  {
    id: 3,
    user: 'Rizky Hasanuddin',
    pic: './src/assets/images/avatar-rizky-hasanuddin.webp',
    msg: 'sent you a private message',
    time: '5 days',
    unread : true
  },

  {
    id: 4,
    user: 'Kimberly Smith',
    pic: './src/assets/images/avatar-kimberly-smith.webp',
    msg: 'commented on your picture',
    time: '1 week',
    unread : true
  },

  {
    id: 5,
    user: 'Nathan Peterson',
    pic: './src/assets/images/avatar-nathan-peterson.webp',
    msg: 'reacted to your recent post 5 end-game strategies to increase your win rate',
    time: '2 weeks',
    unread : true
  },

  {
    id: 6,
    user: 'Anna Kim',
    pic: './src/assets/images/avatar-anna-kim.webp',
    msg: 'left the group Chess Club',
    time: '2 weeks',
    unread : true
  },
]

function App() {

  const [total, setTotal] = useState(data.length);

  function clear(id){
    if(data[id].unread && total > 0){
      setTotal(total - 1);
      data[id].unread ? data[id].unread = false : null;
    }
  }

  function clearAll(){
    for(let user of data) {
      clear(user.id);
    }
    setTotal(0);
  }

  return (
    <div className='Wrapper'>
      <header>
        <div>
          <h1>Notifications</h1>
          <span className='Counter'>{total}</span>
        </div>
        <button onClick={clearAll}>Mark all as read</button>
      </header>

      {data.map(person =>
        <div key={person.id}  onClick={() => clear(person.id)}>
          <Notification key={person.id} user={person.user} pic={person.pic} msg={person.msg}
            time={person.time} className={`Notification ${person.unread ? 'Unread' : 'Read'}`}
          />
        </div>
      )}
    </div>
  )
}

export default App
