import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <main>
    <div>
      <h1>Test</h1>
      <button onClick={()=>{
        throw new Error("This is test error from index.tsx");
      }}>Test AWS RUM</button>
    </div>
   </main>
  )
}
