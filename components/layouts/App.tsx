import Head from 'next/head'
import Link from 'next/link'
import React,{ FC } from 'react'
import Sidebar from '../sidebar/Index'

interface Props {
    // any props that come into the component
}
const App: FC<Props> = ({ children, ...props }) => {
  return (
    <React.Fragment>
        <Head>
          <title>Home</title>
        </Head>
  
        <div className="w-screen max-w-full md:max-w-screen h-screen max-h-full md:max-h-screen bg-white fixed">
        <Sidebar></Sidebar>
        {/* midlle components here... */}
            {children}
        {/* footer Section here ... */}
        </div>
      </React.Fragment>
  )
}

export default App;
