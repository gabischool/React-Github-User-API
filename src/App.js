import React from 'react'
import './App.css';
import axios from 'axios'
import CardUser from './component/CardUser';
class App extends React.Component{

  constructor(){
    super()
    this.state= {
      user:[],
      teacher:[]
    }
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/duraanali').
    then(res => {
      // console.log(res.data);
      const data = res.data
      this.setState({
      
        user:data
      })
    })

    axios.get('https://api.github.com/users/Buushe').
    then(res => {
      // console.log(res.data);
      const data = res.data
      this.setState({
      
        teacher:data
      })
    })
  }


  render(){
    // console.log(this.state.user);
    return(
      <div>
        <CardUser user={this.state.user}  
        teacher={this.state.teacher}/>
      </div>
    )
  }
}


export default App;