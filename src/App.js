import React from 'react';
import './App.css';
import socket from "./streaming_client";
import DenseTable from "./DenseTable"
//This app displays  data from "https://www.live-rates.com/rates"
// and deals with the LIVE STREAMING aspect + 3 queries/hour limitation issue

class App extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = {
      error: null,
      obj:null
      
    };
  
  }

  componentWillMount(){

    try{
      fetch("https://www.live-rates.com/rates")
      .then(res => res.json())
      .then(
      (result) => {
        console.log(result[0].error)
        if(result[0].error!==null){
          socket.on("rates", (msg)=>{
          // console.log(msg)
            let obj1 = JSON.parse(msg);
            this.setState({obj:obj1}) 
          });
        }
        else{
          //alert("else")
          this.setState({
            obj:result.data[0]
        });
        
        }
    
      },
    ).catch(console.log)
    }
    catch(e){
      console.log(e)
    }
  }

 
  render() {

    const { obj } = this.state;

      return (
        <div>
        <h3 style={styles.sharon}>Sharon Nissanov</h3>
        <div  style={styles.display}><br></br> 
        <h1 style={{textAlign: "center"}}>LIVE STREAMING</h1> 
        currency: {obj? obj.currency : null }<br></br>
        bid: {obj? obj.bid : null }<br></br>
        ask: {obj? obj.ask : null } <br></br>
        high: {obj? obj.high : null }<br></br>
        low: {obj? obj.low : null } <br></br>
        open: {obj? obj.open : null }<br></br>
        close: {obj? obj.close : null }<br></br>
        timestamp: {obj? obj.timestamp : null }<br></br>


          </div>
        <DenseTable data={obj}></DenseTable>

        </div>
      );
    }
  }

export default App;

const styles={
  display:{
    backgroundColor:'lightblue', 
  //  textAlign: "center",
   width:"400px", height:"300px", 
    position: "absolute",
    left: "35%",
    top:"150px",
    borderRadius:"8px"

  },
  sharon:{
    color:"lightblue"
  },

}


