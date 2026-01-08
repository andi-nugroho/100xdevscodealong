// Asynchronous Data Queries


import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notifications, totalNotificationSelector } from './atoms'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  // const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const networkCount = useRecoilValue(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // This logic here looks FUGLY it should be inside atom itself where i dont need to 
  // specify default app then set it from here it can be done by using async call using selector
  // useEffect(() => {
  //   // fetch
  //   axios.get("https://sum-server.100xdevs.com/notifications")
  //     .then(res => {
  //       setNetworkCount(res.data)
  //     })
  // }, [])

  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.networks >= 100 ? "99+" : networkCount.networks})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
