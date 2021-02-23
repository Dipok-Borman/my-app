import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const parson1 = {
    name: "Tormuj ali",
    job: "Kochu kata"
  }
  const parson2 = {
    name: "Hurmuj ali",
    job: "Singer"
  }
  var style = {
    color: 'red',
    backgroundColor: 'yellow'
  }
  const parsonsInfo = [
    {name:'dipok', phone:'0.415645131132', id:'4597865465'},
    {name:'Pagol', phone:'0.415645131132', id:'4597865465'},
    {name:'Boka', phone:'0.415645131132', id:'4597865465'},
    {name:'KOKS', phone:'0.415645131132', id:'4597865465'},
    {name:'Moron', phone:'0.415645131132', id:'4597865465'}
  ]
  const nayoks = ['josim', 'manna', 'katar', 'kuyet', 'moriom', 'kazi hayat']
  
  // Main return Of this app:
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter></Counter>
        <Users></Users>
        <h1 style={style}>Hi Boss Kamon Acho.</h1>
        <p>My Frist react pragraph</p>
        <h3 style={{color:'blue', backgroundColor:'lightsalmon'}}>Mis ter: {parson1.name +" "+ parson1.job}</h3>
        <h4>hay re vai: {parson2.name +" "+ parson2.job}</h4>
        <Parson name="Manna" Naika="Mousumi"></Parson>
        <Parson name="Riaz" Naika="Popi"></Parson>
        <Parson name="Sakib" Naika="Mahi"></Parson>
        <Info detail={parsonsInfo[0]}></Info>
        <Info detail={parsonsInfo[1]}></Info>
        <Info detail={parsonsInfo[2]}></Info>
        <Info detail={parsonsInfo[3]}></Info>
        <Info detail={parsonsInfo[4]}></Info>
       

        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            parsonsInfo.map(parson => <li>{parson.name}</li>)
          }
        </ul>
        {/* ata <info></info> beshi na likhar sohoj poddhoti. */}
        {
          parsonsInfo.map(parson => <Info detail={parson}></Info> )
        }

      </header>
    </div>
  );


  // react Load data dynamicaly:
  function Users(){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
    }, [])
    return(
      <div>
      <h1>His is dybnami{users.length}.</h1>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
      </div>
      )
  }


  // react count  state:
  function Counter(){
    const [count, setCount] = useState(10);
    
    const handleClickPlus = () => {
      const newCountPlus = count + 1;
      setCount(newCountPlus);
    }
    
    const handleClickMinus = () => {
      const newCountMinus = count - 1;
      setCount(newCountMinus);
    }

    return(
      <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClickPlus}>Increase</button>
      <button onClick={handleClickMinus}>Decrease</button>
      </div>
    )
  }

  //props and set Dynamic data:
  function Parson(props){
    return (<div style={{border: '2px solid hotpink', margin: '10px'}}>
    <h1>Hi i am {props.name}</h1>
    <h4>Toderke kopabo {props.Naika}</h4>
    </div>)
  }
  function Info(props){
    const {name, phone, id} = props.detail;
    return(
      <div style={{border:'2px solid goldenrod', borderRadius:'5px', margin:'15px', padding:'20px',color:'hotpink'}}>
        <h1>hi I am:{name} </h1>
        <h2>My phone:{phone}</h2>
        <h3>My id:{id}</h3>
      </div>
    )
  }
}

export default App;
