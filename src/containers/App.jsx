import React, {useState} from 'react'
import Card from '../components/card'
import SearchBox from '../components/Searchbox'
import {friendsArr} from '../components/robot'
import Scroll from '../components/scroll'

function App(){
    
//    const {mouseBy, highlightCard} = useState(false)
    
    const [robofriends, foundfriends] = useState({
        robots: friendsArr,
        searchName: ''
    })
   

    // not done !!!!
    // function cardHighlight(){
    //     highlightCard(true)
    // }
    // not done
    // function cardNormal(){
    //     highlightCard(false)
    // }
    let filteredRobots
    function searchFor(event){
        const search = event.target.value;
        
        filteredRobots = friendsArr.filter((rofriend) =>
            rofriend.name.toLowerCase().includes(search.toLowerCase()));  
            
        foundfriends(prevValue =>{
            return {
                robots: filteredRobots,
                searchName:[search]
            }
        });
        }


    return (

        <div className='main-page'>
            <h1> YOUR ROBOFRIENDS</h1>
            <SearchBox 
                nameLookfor = {robofriends.searchName}
                searchingFunction = {searchFor}
            />
            <hr></hr>
    
        <Scroll>
        <div className='cards'>
            {robofriends.robots.map((robofriend, index) =>(
                <Card 
                    key= {index}
                    id = {robofriend.id}
                    name = {robofriend.name}
                    email = {robofriend.email}
                    image = {robofriend.img}
                    // onMouseOver ={cardHighlight}
                    // onMouseOut = {cardNormal}
                />
            )
            )}
            </div>
            </Scroll>
        </div>
    )

}

export default App;