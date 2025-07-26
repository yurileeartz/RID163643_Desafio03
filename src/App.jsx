import React, { useState, useEffect } from 'react';

export default function App() {
  const [text, setText] = useState('');
  const message = "Olá, eu sou o Yuri. Bem-vindo ao meu portfólio!";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(message.slice(0, i + 1));
      i++;
      if (i === message.length) clearInterval(typing);
    }, 80);
    return () => clearInterval(typing);
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="display-5">{text}</h1>
      <p className="mt-3">Veja meus projetos, habilidades e entre em contato pelo <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
    </div>
  );
}
