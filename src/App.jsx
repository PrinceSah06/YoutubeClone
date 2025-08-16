
import './App.css'
import Header from './componets/Header'
import Body from './componets/Body'
import store from './utils/store'
import {Provider} from'react-redux'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import MainContainer from './componets/MainContainer'
import WatchPage from './componets/WatchPage'
// import Body from './componets/Body'

function App() {
 
 const appRouter= createBrowserRouter([{
  path:'/',
  element:<Body/>,
children:[
  {
    path:'/',
    element:<MainContainer/>
  },{
    path:'/watch',
    element:<WatchPage/>
  }
]}])
  return (
<Provider store={store}>
    
    < >
   
    <Header/>
    <RouterProvider router={appRouter}> 
      <Body/>
    </RouterProvider>
    
    
    </>
    </Provider>
  )
}

export default App
