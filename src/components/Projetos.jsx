import React, { useEffect, useState } from 'react'

function Projetos() {
  const [projetos, setProjetos] = useState([])

  useEffect(() => {
    const lista = [
      { id: 1, nome: 'DncWeather', descricao: 'Previsão do tempo com API' },
      { id: 2, nome: 'Portifolio-Yuri', descricao: 'Este portfólio atual' },
    ]
    setProjetos(lista)
  }, [])

  return (
    <div>
      <h2>Projetos</h2>
      <div className="row">
        {projetos.map((proj) => (
          <div key={proj.id} className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{proj.nome}</h5>
                <p className="card-text">{proj.descricao}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projetos
