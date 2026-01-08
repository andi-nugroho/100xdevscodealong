import { RecoilRoot, useRecoilValue } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./atom"
import { useMemo } from "react";


function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
 }
function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const messageCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationAtom);

  // slightly unoptimised way using useMemo -> better use selector
  // const totalNotificationCount = useMemo(()=>{
  //   return networkNotificationCount + jobsNotificationCount + messageCount + notificationCount;
  // },[networkNotificationCount,jobsNotificationCount,messageCount,notificationCount]);

  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <div>
      <button>Home</button>

      <button>My Network ({networkNotificationCount > 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsNotificationCount})</button>
      <button>Messaging ({messageCount})</button>
      <button>Notification ({notificationCount}) </button>

      <button>Me ({totalNotificationCount})</button>
    </div>
  )
}
export default App
