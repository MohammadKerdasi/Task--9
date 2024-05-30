import { useEffect, useState } from 'react'

import './App.css'

function App() {

      
  const [count, setCount] = useState(0)
  const [backgroundColor, setbackgroundColor] = useState('white');
  const [wellcomeMessage , setwellcomeMessage] = useState(false);
  const [popUp , setpopUp] = useState(false);

  useEffect( () =>{
    setwellcomeMessage(true)
  }, [])
  
  useEffect( () =>{
    if (count === 10 || count % 100 === 0){
      setpopUp(true)
    }
    else
    {
      setpopUp(false)
    }
     
    
  }, [count])
  
  
  const HandleCounter = () =>{
    if(count < 10)
      {
          setCount(count + 1);
          if(count + 1 === 10){
            setbackgroundColor('red') 
          }}
      else if (count < 100)
      {
        setCount(count + 10);
        if((count + 10) % 100 === 0){
          setbackgroundColor('blue') 
          }}
      else if (count < 1000)
        {
        setCount(count + 100);
      }
      if (count == 1000)
        {
          setDecrement(true);
          setbackgroundColor('lightblue');
        }
  };
  
  const [Decrement , setDecrement] = useState(false)

  const handleCounterDecrement = () => {
    if (count > 100) {
      setCount(count - 100)
    } else if (count > 10) {
      setbackgroundColor('red') 
      setCount(count - 10)
    } else if (count > 0) {
      setbackgroundColor('white') 
      setCount(count - 1)
    } else {
      setDecrement(false)
    }
  }

  const closeEventModal = () => {
    setpopUp(false)
  }

  return (
            <div>
                  <div style={{backgroundColor: backgroundColor }}>
                          <h1>Increment , decrement</h1>
                          <p>Count is {count}</p>
                              {!Decrement && (
                            <button onClick={HandleCounter}>increament</button>
                            )}
                            {Decrement && (
                            <button onClick={handleCounterDecrement}>decrement</button>
                            )}
            </div>
                  {wellcomeMessage && ( <div className='welcome'> 
                  <h3>welcome to my page</h3>
                  </div>
                      )}
                  {popUp && ( <div className='popUp'> 
                  <span className="close" onClick={closeEventModal}>
                  &times;
            </span>
                  <h3>the count has reached {count} counts</h3>
                  </div>
                      )}
            </div>
  )
}

export default App
