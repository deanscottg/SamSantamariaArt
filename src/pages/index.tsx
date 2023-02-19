import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import FeaturedItems from '../../components/FeaturedItems'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div className="py-4">
        <h1 className="text-center  py-2" >Sam Santamaria Art</h1>
        <h2 className="text-center text-3xl">Fine Art out of Tampa Florida</h2>
        <p className="text-center tracking-wider" >Artist | Photographer | Author </p> 
      </div>
      <div className=' justify-center flex h-screen'>
        <div className='flex items-row box-border rounded-md h-96 w-96 m-sm  border-4 justify-center items-center border-black m-12'>
          <FeaturedItems></FeaturedItems>
           <footer className="text-center py-10">Featured Works</footer>
      </div> 
       
      </div>
      
      <Link  className="btn" href="/gallery">Check out my latest work!</Link>
    </div>
  )
}
  
