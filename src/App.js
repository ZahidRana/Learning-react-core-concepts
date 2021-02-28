import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    {name:"Photoshop", price:"$20.99/mo", details:"Create beautiful graphics, photos, and art on desktop and iPad. Comes with Adobe Fresco for drawing and painting."},
    {name:"Illustrator", price:"$20.99/mo", details: "Create precise designs, Illustrations, and vector graphics on desktop and iPad."},
    {name:"Premiere Pro", price:"$20.99/mo", details:"Professional video and film editing."},
    {name:"After Effects", price:"$20.99/mo", details:"Create motion graphics and visual effects for film, TV, video, and web."},
    {name:"Premiere Rush", price:"$9.99/mo", details:"Create and share online videos. Fast and easy."},
    {name:"InDesign", price:"$20.99/mo", details:"Page design and layout for print and digital media."}
  ]

  const personInfo = [
    {name:'Kamal', age:'30', profession:'Doctor'},
    {name:'Jamal', age:'28', profession:'Lawyer'},
    {name:'Abir', age:'23', profession:'Police Officer'}
  ]

  const students = [
    {name:'Sakib', roll:'345', section:'C'},
    {name:'Rakib', roll:'342', section:'C'},
    {name:'Akib', roll:'325', section:'C'}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1>Practising React</h1>
        <Counter></Counter>
        <Users></Users>
        {
          products.map(productInfo => <Product product = {productInfo}></Product>)
        }
        {
          personInfo.map(personDetails => <Person info = {personDetails}></Person>)
        }
        {
          students.map(studentDetails => <Student studentInfo = {studentDetails}></Student>)
        }
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick = {() => setCount(count + 1)} style = {{margin: "20px"}}>Increase</button>
      <button onClick = {() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return(
    <div>
      <h3>Dynamic Users</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: "2px solid gray",
    borderRadius: "10px",
    backgroundColor: "#F5F5F5",
    color: "black",
    height: "300px",
    width: "270px",
    float: "left",
    marginTop: "10px"
  }

  const {name, price, details} = props.product;
  return (
    <div style = {productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <p style = {{fontSize: "15px"}}>{details}</p>
      <button style = {{color: "white", backgroundColor: "#0D66D0", border: "none", borderRadius: "15px", padding: "15px"}}>Buy Now</button>
    </div>
  )
}

function Person(props) {
  const {name, age, profession} = props.info;
  return (
    <div style = {{border: "3px solid white", borderRadius: "10px", margin: "10px", width: "400px"}}>
      <h3>Name : {name}</h3>
      <p>Age : {age}</p>
      <p>Profession : {profession}</p>
    </div>
  );
}

function Student(props) {
  const {name, roll, section} = props.studentInfo;
  return (
    <div style = {{border: "3px solid white", borderRadius: "10px", margin: "10px", width: "400px"}}>
      <h3>Name : {name}</h3>
      <p>Roll : {roll}</p>
      <p>Section : {section}</p>
    </div>
  )
}

export default App;
