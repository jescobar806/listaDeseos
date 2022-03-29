import type { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <head>
        <title>Home | Lista de deseos </title>
      </head>
      <p>Pagina de inicio</p>
      <div>
        <i className= 'fas fa-home'/>
      </div>
    </div>
  )
}

export default Home
