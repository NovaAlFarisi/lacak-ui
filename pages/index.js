import Head from 'next/head'
import dynamic from 'next/dynamic';
import {PositionContext} from '../store/positionStore'
import { useContext, useEffect, useState } from 'react';
import sampleData from '../sample.json'
import { observer } from 'mobx-react';
import Device from '../components/Device';
const Home = observer(() => {
  const position = useContext(PositionContext)

  const [expandPanel, setExpandPanel] = useState(true);

  const MapWithNoSSR = dynamic(()=> import('../components/Map'),{
    ssr: false
  });

  const handleClickDevice = (id) => {
    position.selectData(id)
  }

  const handleExpandPanel = () => {
    setExpandPanel(!expandPanel)
  }

  useEffect(()=>{
    position.addPosition(sampleData)
  },[position])
console.log(expandPanel)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
        <div className="bg-blue-300 w-full h-screen relative">
          <MapWithNoSSR/>
          <div className="absolute z-50 bottom-0 left-0 right-0 md:top-0 md:left-0 md:p-10 md:w-96">
              <div className="bg-white w-full rounded-md divide-y-2">
                  <div className="flex flex-row space-x-5 justify-between px-5 py-3 ">
                      <a href="#">
                        <svg className="h-7 w-7 text-gray-300 hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </a>
                      <a href="#">
                        <svg className="h-7 w-7 text-gray-300 hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path fill="#fff" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                        </svg>
                      </a>
                      <a href="#">
                        <svg className="h-7 w-7 text-gray-300 hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                      </a>
                      <a href="#">
                        <svg className="h-7 w-7 text-gray-300 hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </a>
                      <a href="#">
                        <svg className="h-7 w-7 text-gray-300 hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                      </a>
                  </div>
                  <div className="relative py-3 px-5 flex flex-row justify-between">
                      <div></div>
                      <h1 className="font-bold">Unit Location</h1>
                      <button>
                        <svg className="h-7 w-7 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </button>
                      
                      <button onClick={()=>handleExpandPanel()} className="absolute bg-white rounded-full -bottom-5 left-1/2 -ml-5">
                        {!expandPanel ? (
                          <svg className="h-7 w-7 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                          </svg>
                        ) : (
                          <svg  className="h-7 w-7 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                          </svg>
                        )}
                      </button>
                  </div>
                  <div className={"py-5 px-5 bg-gray-100 md:h-80 overflow-y-scroll space-y-2 h-40 transition-all " + (!expandPanel ? "visible" : "hidden")}>
                      {position ? (
                        position.data.map((val,i)=>(
                          <Device handleClick={handleClickDevice} key={i} data={val}/>
                        ))
                      ) : 'No Device'}
                  </div>
              </div>
          </div>
        </div>
      </div>
  )
})

export default Home;
