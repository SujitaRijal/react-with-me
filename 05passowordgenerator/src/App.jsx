import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
 const [length, setLength]=useState(8);
 const [numAllow, setNumallow]=useState(false);
 const [charAllow, setCharallow]=useState(false);
 const [password,setPassword]=useState("");
  //useref:kesaiko reference lena parepar
  const passwordRef=useRef(null)

 //syntax: usecallback(fn,dependencie) ->memorize garxa-optimize
 const passwordGenerator= useCallback(()=>{
  let pass=""
  let  str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" //data jasle password banauxa 
  if(numAllow) str+="0123456789"
  if(charAllow) str+="!@#$%^&*()-+=[]{}~`"
  
  for (let i = 1; i <= length; i++) {
    let char=Math.floor(Math.random()*str.length+1);
    pass+=str.charAt(char)
    
  }
  setPassword(pass)

 },[length,numAllow,charAllow,setPassword])
 
 const copyPasswordToClipBoard=useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,99);
  window.navigator.clipboard.writeText(password)
 }
 ,[password])


 //jaba page load hunxa first time ma yo call hunxa  ani dependencies array ma kei change vayo vaney pani rerun hunxa
useEffect(()=>{
passwordGenerator()
},[length,numAllow,charAllow,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8  bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-xl overflow-hidden mb-4'> 
          <input
           type="text" 
           value={password}
           className='outline-none w-full py-1 px-3'
           placeholder="password"
            readOnly
            ref={passwordRef}
           />
            <button
            onClick={copyPasswordToClipBoard} className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0'
            >copy</button>
           
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaulltChecked={numAllow}
            id='numberInput'
            onChange={()=>{
              setNumallow((prev)=>!prev);
            }}
             />
             <label htmlFor="numberInput">numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaulltChecked={charAllow}
            id='characterInput'
            onChange={()=>{
              setCharallow((prev)=>!prev);
            }}
             />
             <label htmlFor="characterInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  )

}
export default App
