import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //responsible for state change under DOM  :usestate
let [counter,setCounter] = useState(0)

//let counter=5;
const  addValue=()=>{
  //counter=counter+1
  // setCounter(prevcounter=>{prevcounter+1})
  // setCounter(prevcounter=>{prevcounter+1})
  // setCounter(prevcounter=>{prevcounter+1})
  //callback ko through bata aako chai complete vayesi matra arko call hunxa ani  balla complete update hunxa 
  if(counter>=0 && counter<20){
  setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)
//esari chai usesatate le sabai updates  variable sammah nai batches ma  pathauxa so ya ni auta batch banyo ani same work chai repeat vayo  tara kunai situation ma counter lai esari nai update garna pryo vane yo setter method ma prevcounter->existing state.. ani setcounter ma chai callback function hunxa-hidden features
  // console.log("clicked",counter);
  }

}
const removeValue=()=>{
  if(counter>0)
  {
  setCounter(counter-1)
  }
}
  return (
    <>
      <h1>React with me</h1>
      <h2>Counter value:{counter}</h2>
      <button
      onClick={addValue}
      >Add value{counter}</button>
      <br />
      <button
      onClick={removeValue}
      >remove value{counter}</button>
      {/* <p>footer:{counter}</p> */}
    </>
  )
}

export default App
