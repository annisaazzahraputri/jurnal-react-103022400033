import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const gayaJudul = {color: '#1F3A5F', fontSize : '28px'}
function App() {
  const [count, setCount] = useState(0)
  const N = 24;
  const Nama = ' Annisa ';
  const jam = 9;

  return (
    <>
      <h1 className= "judul" style = {gayaJudul}>Kantin{Nama}</h1>
      <p>Selamat Pagi</p>
      <p>Saldo awal kartu kantin : Rp {N*1000}</p>
      <p>{jam < 12 ? 'Selamat pagi': 'Selamat siang'}</p>

      <button disabled> Bayar</button>

              
    </>
  )
}
  
  

export default App
