import React, { useState, useEffect } from 'react'

function Home() {
  const [texto, setTexto] = useState('')
  const mensagem = 'Olá, eu sou o Yuri, desenvolvedor web!'

  useEffect(() => {
    let i = 0
    const intervalo = setInterval(() => {
      setTexto((prev) => prev + mensagem[i])
      i++
      if (i >= mensagem.length) clearInterval(intervalo)
    }, 100)
    return () => clearInterval(intervalo)
  }, [])

  return (
    <div className="mb-5">
      <h1>{texto}|</h1>
      <p>
        Sou um desenvolvedor com foco em React, criando aplicações modernas,
        rápidas e responsivas.
      </p>
      <a href="https://www.linkedin.com/in/yurileearts" target="_blank" className="btn btn-primary">
        LinkedIn
      </a>
    </div>
  )
}

export default Home
