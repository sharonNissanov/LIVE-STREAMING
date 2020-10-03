import React from 'react';
import { makeStyles } from '@material-ui/core/styles';  
import {TableContainer,Paper,Table,TableRow,TableCell,TableHead,TableBody,Radio, Container} from "@material-ui/core";
    
//table to display data in another way


export default class DenseTable extends React.Component {
    constructor(props) {
    
        super(props);
        this.state = {
           headers :[
        "currency",
        "bid",
        "ask",
        "high",
        "low",
        "open",
        "close",
        "timestamp",
        ],
        rowsObj: {compamy:'Keplerk', product:'BTC-EUR', date:'30 Apr 2020 17:09',status:'Active'},
          
        };
      
      }
    render()
    {
    // const classes = useStyles();
    const { headers,rowsObj } = this.state;
    const { data } = this.props;
  
    // {data !==null?  console.log("data", data.currency): null }
    return (
    <div  >
    <TableContainer style={styles.container} >
      <Table>
      <TableHead>
        <TableRow >
          {headers.map(text => (
          <TableCell  key={text}>{text}</TableCell> ))}
        </TableRow>
      </TableHead>
        <TableBody>
      {data !==null? 
            <TableRow key={rowsObj.currency} >
              <TableCell >{data.currency}</TableCell>
              <TableCell >{data.bid}</TableCell>
              <TableCell >{data.ask}</TableCell>
              <TableCell >{data.high}</TableCell>
        
              <TableCell >{data.low}</TableCell>
              <TableCell >{data.open}</TableCell>

              <TableCell >{data.close}</TableCell>
              <TableCell >{data.timestamp}</TableCell>

            </TableRow>
        
        :null}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  ); 
    }

}


const styles={
  container:{
    backgroundColor:'lightblue', 
    textAlign: "center",
   width:"800px", minHeight:"100px", 
    position: "absolute",
    left: "25%",
    top:"550px",
    borderRadius:"8px"

  },
}


