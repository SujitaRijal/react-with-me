import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cardsam from './components/Cardsam'


function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username:"hello",
    age:20
  }
  let newarr=[1,2,3,4]
  return (
    <>
   <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
<Cardsam username="helloworld" btnText="Click me"/>
<Cardsam username="sujita" btnText="Visit me"/>
 {/* if not given btntext then {btntext} yesma add || and give default value in card.jsx  or in function t top in cardsam.jsx */}
  
 </>
  )
}

export default App
