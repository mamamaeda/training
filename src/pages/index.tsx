import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <main>
    <div>
      <h1>Test</h1>
      <button onClick={()=>{
        console.error("This is test error message.")
      }}>Test AWS RUM</button>
    </div>
   </main>
  )
}
