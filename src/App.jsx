import { useState } from 'react';
import Notification from './Notification';
import data from './data.json';
import './App.css';

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
          <Notification 
            key={person.id} 
            user={person.user} 
            pic={person.pic} 
            msg={person.msg}
            time={person.time} 
            content={person.content} 
            link={person.link}
            commentedPic={person.commentedPic}
            className={person.unread ? 'Unread' : 'Read'}
          />
        </div>
      )}
    </div>
  )
}

export default App
