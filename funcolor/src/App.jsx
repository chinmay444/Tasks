import { useState } from 'react'


function App()
 {
  
  const [color, setColor] = useState('white')

  return (
    <>
       <div className='w-full h-screen ' style={{backgroundColor: color}}>
          <div className='fixed flex flex-wrap px-40 justify-center bottom-16 rounded-xl'>

                <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-xl'>
                
                  <button 
                  onClick={()=>{setColor('red')}}
                  className='px-4 rounded-2xl text-white' style={{backgroundColor: 'red'}}>
                  Red</button>

                  <button 
                   onClick={()=>{setColor('green')}}
                  className='px-4 rounded-2xl text-white' style={{backgroundColor: 'green'}}>
                  Green</button>

                  <button 
                   onClick={()=>{setColor('yellow')}}
                  className='px-4 rounded-2xl text-white' style={{backgroundColor: 'yellow'}}>
                  Yellow</button>

                  <button 
                   onClick={()=>{setColor('black')}}
                  className='px-4 rounded-2xl text-white' style={{backgroundColor: 'black'}}>
                  Black</button>

                  <button 
                   onClick={()=>{setColor('blue')}}
                  className='px-4 rounded-2xl text-white' style={{backgroundColor: 'blue'}}>
                  Blue</button>

                  <button 
                   onClick={()=>{setColor('olive')}}
                  className='px-4 rounded-2xl text-white' style={{backgroundColor: 'olive'}}>
                  Olive</button>

                  <button 
                   onClick={()=>{setColor('Violet')}}
                  className='px-4 rounded-2xl text-white' style={{backgroundColor: 'Violet'}}>
                  Violet</button>

                  <button 
                   onClick={()=>{setColor('Orange')}}
                  className='px-4 rounded-2xl text-white' style={{backgroundColor: 'Orange'}}>
                  Orange</button>

                  <button 
                   onClick={()=>{setColor('Grey')}}
                  className='px-4 rounded-2xl text-white' style={{backgroundColor: 'Grey'}}>
                  Grey</button>

                  <button 
                   onClick={()=>{setColor('Brown')}}
                  className='px-4 rounded-2xl text-white' style={{backgroundColor: 'Brown'}}>
                  Brown</button>
                </div>
          </div>

       </div>
     
    </>
  )
}

export default App
