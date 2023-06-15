import React, {useState, useEffect} from 'react'

function Timer() {

    const [count, setCount] = useState(0);

    const [timer, setTimer] = useState(false);

    useEffect (()=> {
           const interval = setInterval(() => {
                if (count >= 30) {
                    setTimer(true)
                } else {
                    setCount(count => count + 1)
                }
            }, 1000);

            return () => clearInterval(interval)
        }, [count])

function Cartel () {
    window.location.reload()

    return <div>
                <h1 id='timer'>Your time is up!</h1>
           </div>
}

    return (
        <div>
          {timer ? <Cartel /> :
        <div>
            <p id='time'>{count}</p>
        </div>}
        </div>
    )
}

export default Timer