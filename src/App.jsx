import { useState } from 'react'
import { Logo, Input, Data } from './components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [value, setValue] = useState('')

  const searchFun = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
      <div className='w-full h-screen flex flex-col justify-between items-center bg-gray-500 text-white text-s overflow-y-scroll'>
        <nav className='w-full h-15 py-1 px-2 flex justify-between items-center bg-black'>
          <div className='w-half mx-8 flex items-center'>
            <div className='m-4'>
              <Logo />
            </div>
            <h1 className='text-bold text-lg'>github user finder</h1>
          </div>
          <div className='mx-8 w-half'>
            <Input onChange={searchFun} value={value} />
          </div>
        </nav>
        <main className="w-full h-auto flex justify-center items-center flex-col gap-6">
          <Data value={value} />
        </main>
        <footer className='w-full h-auto py-4 px-5 flex justify-between items-center bg-gray-900'>
          <div className="px-4">
            <span className="mr-2 text-gray-200">Source:</span>

            <a
              href="https://docs.github.com/en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-black px-4 py-2 text-white transition hover:bg-gray-800"
            >
              GitHub Docs
            </a>
          </div>
          <div className='font-light text-xs items-baseline-last absolute bottom-0 right-0 m-2'>by hitesh bhatnager</div>
        </footer>
      </div>
    </>
  )
}

export default App
