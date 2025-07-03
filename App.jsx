import { BrowserRouter, Routes,Route } from "react-router-dom"
import Login from "./src/Login"
import Profile from "./src/Profile"
import Body from "./src/Body"
import { Provider } from "react-redux"
import appstore from "./src/utils/appstore"
import Feed from "./src/Feed"

function App() {
 

  return (
    <>
    <Provider store={appstore}>
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body />}>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Feed/>}/>
      <Route path="/profile" element={<Profile/>}/>
      </Route>
     
    </Routes>
    </BrowserRouter>
    </Provider>
   
    </>
  )
}

export default App
