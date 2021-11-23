import './App.css';

import html2canvas from 'html2canvas';
import { useState } from 'react'

function App() {

  const [linea1, setLinea1] = useState('')
  const [linea2, setLinea2] = useState('')
  const [imagen, setImagen] = useState('')

  const onChangeLinea1 = (evento) => {
    setLinea1(evento.target.value)
  }
  
  const onChangeLinea2 = (evento) => {
    setLinea2(evento.target.value)
  }
  
  const onChangeImagen = (evento) => {
    setImagen(evento.target.value)
  }
  
  const onClickExportar = (evento) => {
    alert('EXPORTAR')
    html2canvas(document.querySelector("#meme")).then(canvas => {
      let img = canvas.toDataURL('image/png')

      let link = document.createElement('a')
      link.download = 'meme.png'
      link.href = img
      link.click()

    });
  }

  return (
    <div className="App">
      
      <select onChange={onChangeImagen}>
      
        <option>seleciona plantilla</option>

        <option value='fire'>Casa en llamas</option>
        
        <option value='futurama'>Futurama</option>

        <option value='history'>History Channel</option>

        <option value='matrix'>Matrix</option>

        <option value='philosoraptor'>Philosoraptor</option>

        <option value='smart'>Smart Guy</option>

      </select> <br />

      <input onChange={onChangeLinea1} type="text" placeholder="Linea 1" /> <br />
      <input onChange={onChangeLinea2} type="text" placeholder="Linea 2" /> <br />
      <button onClick={onClickExportar}>Exportar</button>

      <div id='meme'>
        <span className='linea1'>{linea1}</span> <br />
        <span className='linea2'>{linea2}</span>
        <img src={"/img/" + imagen + ".jpg"} />
      </div>

    </div>
  );
}

export default App;
