import html2canvas from 'html2canvas';
import { useState } from 'react';
import './App.css';


function App() {

  const [line1, setline1] = useState('');
  const [line2, setline2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeline1 = function (event) {
    setline1(event.target.value)
  }

  const onChangeline2 = function (event) {
    setline2(event.target.value)
  }

  const onChangeImagen = function (event) {
    setImagen(event.target.value)
  }

  const onClickexport = function (event) {

    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">

      <select onChange={onChangeImagen}>
        <option value="fire">Fire Girl</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="smart">Smart Guy</option>
      </select> <br />

      <input onChange={onChangeline1} type="text" placeholder="line 1" /> <br />
      <input onChange={onChangeline2} type="text" placeholder="line 2" /> <br />
      <button onClick={onClickexport}>Download</button>

      <div className="meme" id="meme">
        <span>{line1}</span> <br />
        <span>{line2}</span>
        <img src={"/img/" + imagen + ".jpg"} alt="meme" />
      </div>

    </div>
  );
}


export default App;