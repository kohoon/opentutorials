import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [funcShow, setFuncShow] = useState(true);
  const [classShow, setClassShow] = useState(true);
  return (
    <div className="container">
      <h1>Hello world</h1>
      <input type="button" value="remove func" onClick={function(){
        setFuncShow(false);
      }}></input>
      <input type="button" value="remove class" onClick={function(){
        setClassShow(false);
      }}></input>
      {funcShow ? <FuncComp initNumber={2}></FuncComp> : null}
      {classShow ? <ClassComp initNumber={2}></ClassComp> : null}
    </div>
  );
}

const funcStyle = 'color:blue';
let funcId = 0;

function FuncComp(props){
  const numberState = useState(props.initNumber);
  const number = numberState[0]
  const setNumber = numberState[1];
  // const dateState = useState((new Date()).toString());
  // const _date = dateState[0]
  // const setDate = dateState[1];
  const [_date, setDate] = useState((new Date()).toString());
  
  // Side-effect
  useEffect(function() {
    console.log('%ccfunc => useEffect number (componentDidMount & componentDidUpdate) '+(++funcId), funcStyle);
    document.title = number;
    return function() {
      console.log('%ccfunc => useEffect number return(componentDidMount & componentDidUpdate) '+(++funcId), funcStyle);
    }
  }, [number]);

  useEffect(function() {
    console.log('%ccfunc => useEffect date (componentDidMount & componentDidUpdate) '+(++funcId), funcStyle);
    document.title = _date;
    return function() {
      console.log('%ccfunc => useEffect _date return(componentDidMount & componentDidUpdate) '+(++funcId), funcStyle);
    }
  }, [_date]);

  console.log('%ccfunc => render '+(++funcId), funcStyle);
  
  return (
    <div className='container'>
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {_date}</p>
      <input type="button" value="random" onClick={
          function(){
            setNumber(Math.random());
      }}/>
      <input type="button" value="date" onClick={
          function(){
            setDate((new Date()).toString());
      }}/>
    </div>
  )
}
const classStyle ='color:red';
class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date:(new Date()).toString()
  }
  componentWillMount() {
    console.log('%cclass => componentWillMount', classStyle);
  }
  componentDidMount() {
    console.log('%cclass => componentDidMount', classStyle);
  }
  render() {
    console.log('%cclass => render', classStyle)
    return (
      <div className='container'>
        <h2>class Style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input type="button" value="random" onClick={
          function(){
            this.setState({number:Math.random()})
          }.bind(this)
        }/>
        <input type="button" value="date" onClick={
          function(){
            this.setState({date:(new Date()).toString()})
          }.bind(this)
        }/>
      </div>
    )
  }
}
export default App;