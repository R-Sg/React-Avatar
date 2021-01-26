import './App.css';
import Header from './Header' 
import AvatarCard from './Avatar'
import { Button } from 'react-bootstrap'
import { Component } from 'react';

// Function Based component.

// function App() {
//   const avatarlistarray = [
//     {
//       id:'1',
//       name:'Rohit',
//       position:'Web Developer'
//     },
//     {
//       id:'2',
//       name:'Muskan',
//       position:'React Developer'
//     },
//     {
//       id:'3',
//       name:'Anand',
//       position:'IOS Developer'
//     },
//     {
//       id:'4',
//       name:'Kapil',
//       position:'Django Developer'
//     },
//   ]

//   const avatarList = avatarlistarray.map( (currentVal, index) => {
//     return <AvatarCard key={index} id={currentVal.id} name={currentVal.name} position={currentVal.position}/>
//   });

//   return (
//     <>
//       <Header/>
//       <center>
//       <h2 style={{backgroundColor:"blue", display:'inline-block'}}>Welcome to React world.</h2>
//       </center>
//       <center>
//       {avatarList}
//       </center>
//       <br></br>
//       <Button>Like This</Button>
//     </>
//   );
// }




// Class Based Component.
class App extends Component {
  constructor() {
    super();
    this.state = {
      name : "Welcome to Developer world.",
      hitCount : true

    }
  }

  nameChange() {
    if (this.state.hitCount) {
      this.setState({
        name:"Do you like this.",
        hitCount:false
      })
    } else {
      this.setState({
        name:"Welcome to Developer world.",
        hitCount:true
      })
    }
    
  }

  render () {
    const avatarlistarray = [
      {
        id:'1',
        name:'Rohit',
        position:'Web Developer'
      },
      {
        id:'2',
        name:'Muskan',
        position:'React Developer'
      },
      {
        id:'3',
        name:'Anand',
        position:'IOS Developer'
      },
      {
        id:'4',
        name:'Kapil',
        position:'Django Developer'
      },
    ]
  
    const avatarList = avatarlistarray.map( (currentVal, index) => {
      return <AvatarCard key={index} id={currentVal.id} name={currentVal.name} position={currentVal.position}/>
    });
    return (
      <>
      <Header/>
      <center>
      <h2 style={{backgroundColor:"blue", display:'inline-block'}}>{this.state.name}</h2>
      </center>
      <center>
      {avatarList}
      </center>
      <br></br>
      <Button style={{top:'400px'}} onClick={ () => this.nameChange() }>Click here to change heading</Button>
    </>
    )
  }
}

export default App;
