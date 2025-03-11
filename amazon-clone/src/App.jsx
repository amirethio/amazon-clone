import { useContext, useEffect, useState } from 'react'
import './App.css'
import Routing from './Router'
import { DataContext } from './components/DataProvider/DataProvider'
import { type } from './utility/actiontype'
import { auth } from './utility/firebase'

function App() {
  const [ {user} , dispatch] =  useContext(DataContext)
  const [count, setCount] = useState(0)
useEffect(()=>{
auth.onAuthStateChanged((authUser)=>{
 if(authUser){
  dispatch(
    {type:type.SET_USER ,
      user:authUser
    }
  )
 }else{
   dispatch({ type: type.SET_USER, user: null });
 }
  



})
},[])
  return (
    <>
    <Routing/>
    </>
  )
}

export default App
