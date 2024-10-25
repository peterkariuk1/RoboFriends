import React, {useState,useEffect} from 'react';
import CardList from './CardList';
//import { robots } from './robots';
import './card.css';
import SearchBox from './SearchBox';


function App (){ 
  
   const[robots,setRobots] = useState([]);
   const[searchField,setSearchField] = useState('');
   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {setRobots(users)});
}, []); 
    const onSearchChange = (event) => {
        setSearchField( event.target.value);
    }
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
    return (
    <div className='app-container'>
        <h1>ROBOFRIENDS</h1>
        <SearchBox searchChange = {onSearchChange }/>
        <CardList robots = {filteredRobots}/>
    </div>
    
    );
};

export default App;