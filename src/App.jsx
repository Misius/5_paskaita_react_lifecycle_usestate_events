import './App.css';
import Title from './components/Title';
import MainTitle from './components/MainTitle';
import Counter from './components/counters/Counter';
import Users from './components/Users';
import { useState } from 'react';
import Clock from './components/Clock';

function App() {
  console.log('App.jsx created');
  const [showUsers, setShowUsers] = useState(true);

  // paspaudus an h1 el, padidini jo dydi iki 2rem
  return (
    <div className='App container'>
      {!showUsers && <Clock />}
      <button onClick={() => setShowUsers(!showUsers)}>toggle Users</button>
      <MainTitle />

      {/* <Title>Events and Hooks</Title> */}
      {/* <Counter /> */}

      {!showUsers && <Counter>Push ups</Counter>}
      <Counter initValue='40' />
      {showUsers && <Users />}
    </div>
  );
}

export default App;
