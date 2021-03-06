import React, { useState, useEffect } from 'react'
import Login from './Components/Login'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import Loggedin from './Components/Loggedin'
import { useHistory } from 'react-router';

function App() {
  let [currentUser, setUser] = useState({})
  let history = useHistory()

  let logout = (setDogs) => {
    setDogs([])

    fetch('http://localhost:3000/logout')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      localStorage.getItem('token').clear()
      setUser({})
      history.push('/')
    })
  }

  useEffect(() => {

    // fetch('http://localhost:3000/check-login', {
    //   credentials: 'include',
    // })
    // .then(res => res.json())
    // .then(user => {
    //   if(user.username){
    //     setUser(user)
    //     history.push('/loggedin')
    //   } else {
    //     history.push('/login')
    //   }
    // })

    //Adding history to the dependency array will get rid of this error message
    //React Hook useEffect has a missing dependency: 'history'. 
    //Either include it or remove the dependency array  react-hooks/exhaustive-deps
  },[history])

  return (
    <Switch>
      <Route exact path ='/' component={ () => <Home /> } />
      <Route exact path ='/login' component= { () => <Login setUser = {setUser} currentUser = {currentUser}/> }/>
      <Route exact path ='/loggedin' component={ () => <Loggedin currentUser = { currentUser } logout ={logout}/> }/>
    </Switch>
  );
}

export default App;
