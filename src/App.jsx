import Notification from './Notification';
import './App.css'

const data = [
  {
    id: 0,
    user: 'Mark Webber',
    pic: './src/assets/images/avatar-mark-webber.webp',
    msg: 'esto es una notificación',
    time: '1m'
  },

  {
    id: 1,
    user: 'Angela Gray',
    pic: './src/assets/images/avatar-angela-gray.webp',
    msg: 'esto es una notificación',
    time: '5m'
  },

  {
    id: 2,
    user: 'Jacob Thompson',
    pic: './src/assets/images/avatar-jacob-thompson.webp',
    msg: 'esto es una notificación',
    time: '1 day'
  },

  {
    id: 3,
    user: 'Rizky Hasanuddin',
    pic: './src/assets/images/avatar-rizky-hasanuddin.webp',
    msg: 'esto es una notificación',
    time: '5 days'
  },

  {
    id: 4,
    user: 'Kimberly Smith',
    pic: './src/assets/images/avatar-kimberly-smith.webp',
    msg: 'esto es una notificación',
    time: '1 week'
  },

  {
    id: 5,
    user: 'Nathan Peterson',
    pic: './src/assets/images/avatar-nathan-peterson.webp',
    msg: 'esto es una notificación',
    time: '2 weeks'
  },

  {
    id: 6,
    user: 'Anna Kim',
    pic: './src/assets/images/avatar-anna-kim.webp',
    msg: 'esto es una notificación',
    time: '2 weeks'
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
        <Notification key={person.id} user={person.user} pic={person.pic} msg={person.msg} time={person.time} />)}

    </div>
  )
}

export default App
