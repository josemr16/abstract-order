import React from 'react';
import './display.css';
import getOrder from './findorder';

class Display extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			first:0,
			second:0,
			result:""
		}
	}

	onChangeFirst = (e) =>{
		this.setState({first:e.target.value})
		// console.log(this.state.first)
	}

	onChangeSecond = (e) =>{
		this.setState({second:e.target.value})

	}
	onClickSubmit = () => {

		this.setState({result:getOrder(this.state.first,this.state.second)})
		console.log(this.state.result)
	}

	render() {

		return(
			<div className = 'w--100'>
				<div className="pa3 mt3 tc centered shadow-2 br2">
					<div className = 'centered'>
						<input className="db centered" onChange={this.onChangeFirst} placeholder ='Order of a' type='number'/>
						<input className="db centered" onChange={this.onChangeSecond} placeholder ='Power of a'type='number'/>
						<button onClick={this.onClickSubmit}>Submit</button>
					</div>
					<div className ="centered">
						<span>{`The Order of a^${this.state.second} is ${this.state.result}`}</span>
					</div>
				</div>
			</div>
			
		);
	}
}

export default Display;