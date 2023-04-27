import { Inter } from 'next/font/google'
import { awsRum } from './_app'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <main>
    <div>
      <h1>Test</h1>
      <button onClick={()=>{
        console.error("This is test error message.")
        awsRum?.recordError(new Error("This is test error message."));
      }}>Test AWS RUM</button>
    </div>
   </main>
  )
}
