import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>Sam Santamaria Art</h1>
        <h2>Fine Art out of Tampa Florida</h2>
          <p>Originally from the Phillippines and having moved to the states in bla bla bla</p>
    </div>
  )
}
  
