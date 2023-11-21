import { useState } from 'react'
import './App.css'

function App() {

  const [corDeFundo, setCordeFundo] = useState("#404040")
  const [title, setTitle] = useState("𝓞𝓹𝓮𝓷");
  const [counter, setCounter] = useState(0);
  const [buttonTitle, setButtonTile] = useState("🎁")
  const [hide, setHide] = useState("hide")

  const mudarCorDeFundo = () => {
    if (counter == 0) {
      setCordeFundo("#0D1321")
      setButtonTile("🌑")
      setTitle("𝓝𝓲𝓰𝓱𝓽🌑")
      setCounter(counter + 1);
      setHide("")

    } else {
      setCordeFundo("#f7bd34")
      setButtonTile("☀️")
      setTitle("𝓓𝓪𝔂☀️")
      setCounter(0);


    }

  }

  return (
    <>
      <div className='centerDiv'>
        <body style={{ backgroundColor: corDeFundo, height: '100vh', transition: 'background-color 2.0s' }}>
          <div className={hide} style={{ transition: "3.0s" }}>
            <h1 className='titulo'>{title}</h1>
            <div className='flor'>
              <div className='flor flor2'>
                <div className='flor flor3'>
                  <div className='circle'></div>
                </div>
              </div>
            </div>
            <div className='caule'></div>
            <div className='caule caule2'></div>
          </div>

          <button onClick={mudarCorDeFundo} className='button'>{buttonTitle}</button>
        </body>
      </div>
    </>

  )
}

export default App
