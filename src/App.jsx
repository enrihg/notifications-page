import Notification from './Notification';
import './App.css'

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
      <Notification pic="./src/assets/images/avatar-mark-webber.webp" name="Mark Webber" time="1m" />
      <Notification pic="./src/assets/images/avatar-angela-gray.webp" name="Angela Gray" time="5m" />
      <Notification pic="./src/assets/images/avatar-jacob-thompson.webp" name="Jacob Thompson" time="1 day" />
      <Notification pic="./src/assets/images/avatar-rizky-hasanuddin.webp" name="Rizky Hasanuddin" time="5 days" />
      <Notification pic="./src/assets/images/avatar-kimberly-smith.webp" name="Kimberly Smith" time="1 week" />
      <Notification pic="./src/assets/images/avatar-nathan-peterson.webp" name="Nathan Peterson" time="2 weeks" />
      <Notification pic="./src/assets/images/avatar-anna-kim.webp" name="Anna Kim" time="2 weeks" />
    </div>
  )
}

export default App
