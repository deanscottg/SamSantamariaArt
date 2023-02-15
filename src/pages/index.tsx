import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1 className="title" >Sam Santamaria Art</h1>
        <h2 className="text">Fine Art out of Tampa Florida</h2>
          <p className="text" >Artist | Photographer | Author </p>
          <Link  className="btn" href="/gallery">Check out my latest work!</Link>
    </div>
  )
}
  
