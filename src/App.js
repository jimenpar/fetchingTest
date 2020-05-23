import React from 'react';
import './App.css';
import {getUser} from './helper';

function Loading(){
  return("Is Loading...");
}

function UserData(props){
  if (!props.datos){
    return (<div>Error al obtener el usuario</div>);
  }
  return(
    <>
    <div>{props.datos.name.first}</div>
    <div>{props.datos.name.last}</div>
    <img src={props.datos.picture.large} alt="user"></img>
    </>
  );
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isLoading:true,
      value:null
    };
  }

  async componentDidMount(){
    let usuario = undefined;
    try{
      usuario = await getUser();
      console.log("TODO OK")
    }catch(error){
      //Pillamos el error de red
      console.log("ERROR en la peticion:(",error)
      usuario = undefined;
    }
    this.setState({value:usuario, isLoading:false});
  }
  render(){
  return(
    <div className="App">
      {this.state.isLoading?<Loading/>:<UserData datos={this.state.value}/>}
    </div>
  );};
}

export default App;
