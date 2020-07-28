import React from 'react'
import {connect} from 'react-redux'
import {setSearchField, requestRobots} from '../action'
import Card from '../components/card'
import SearchBox from '../components/Searchbox'
import Scroll from '../components/scroll'

const mapStateToProps = state =>{
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => requestRobots(dispatch)
    }
}

function App(props){
    
    const {searchField, onSearchChange, robots} = props;

    
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
      })


    return (
        <div className='main-page'>
            <h1> YOUR ROBOFRIENDS</h1>
            <SearchBox 
                nameLookfor = {searchField}
                searchingFunction = {onSearchChange}
            />
            <hr></hr>
    
        <Scroll>
        <div className='cards'>
            {filteredRobots.map((robofriend, index) =>(
                <Card 
                    key= {index}
                    id = {robofriend.id}
                    name = {robofriend.name}
                    email = {robofriend.email}
                    image = {robofriend.img}
                />
            ))}
        </div>
        </Scroll>
        </div>
    )

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
