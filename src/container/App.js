import React,{Component} from 'react';
import Cardlist from '../component/cardList';
import SearchBox from'../component/SearchBox';
import Scroll from '../component/Scroll';

class App extends Component
{
	constructor()
	{
		super()
		this.state=
		{
			robots:[],
			searchfield: ''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=>{this.setState({robots:users})})
	}
	onSearchchange=(event)=>
	{
		this.setState({searchfield:event.target.value})
	}
	render()
	{
		const filteredRobots = this.state.robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		console.log(filteredRobots);
		if(this.state.robots.length===0){
			return <h1 className='tc pa5' >LOADING</h1>
		} 
		else{
		return(
		<div className= 'tc'>
		<h1 className ='f1'>ROBOFRIENDS</h1>
		<SearchBox searchChange={this.onSearchchange} />
		<Scroll>
			<Cardlist robot={filteredRobots}/>
		</Scroll>
		</div>
		);}
	}
}
export default App;