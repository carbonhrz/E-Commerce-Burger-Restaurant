import { Inter } from 'next/font/google'

import Bucket from './bucket'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div>
  <Bucket />

  </div>  
  
  )
  
}
