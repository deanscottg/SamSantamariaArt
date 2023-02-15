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
      <div className="py-4">
        <h1 className="text-center text-6xl py-2" >Sam Santamaria Art</h1>
        <h2 className="text-center text-3xl">Fine Art out of Tampa Florida</h2>
        <p className="text-center tracking-wider" >Artist | Photographer | Author </p> 
      </div>
      
      <Link  className="btn" href="/gallery">Check out my latest work!</Link>
    </div>
  )
}
  
