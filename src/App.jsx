import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
// import { useEffect } from 'react'
// import { messaging, generateToken } from './firebase';
// import { onMessage } from 'firebase/messaging';

function App() {

  // useEffect(() => {
  //   generateToken();

  //   onMessage(messaging, payload => {
  //     console.log(payload)
  //   })

  // }, []);

  return (
    <div className='max-w-md mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App;
