import React, { useState } from 'react'
import './App.css'

function App() {

  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("please type weight and height");
    } else {
      let bmi = weight / (height * height);
      setBmi(bmi.toFixed());

      if (bmi <= 18) {
        setMessage("you are weak");
        setImage("https://i.ytimg.com/vi/okoB9frBGIw/hqdefault.jpg");
      } else if (bmi <= 25 && bmi >= 18) {
        setMessage("you are normal");
        setImage(
          "https://iaahbr.tmgrup.com.tr/cc380e/0/0/0/0/0/0?u=https://iahbr.tmgrup.com.tr/album/2022/12/08/kurtlar-vadisi-dizisinin-standart-kazimini-gorenler-sasti-kaldi-son-haline-yorum-yagdi-1670480764281.jpg&mw=730&l=1"
        );
      } else if (bmi <= 30 && bmi >= 25) {
        setMessage("you are fat");
        setImage(
          "https://galeri13.uludagsozluk.com/713/kurtlar-vadisi-abidin_2162358.jpg"
        );
      } else if (bmi >= 30 && bmi <= 35) {
        setMessage("you are obese");
        setImage("https://i.ytimg.com/vi/IPbyySh9ROM/hqdefault.jpg");
      } else if (bmi >= 35) {
        setMessage("morbid obesity");
      }
    }
  };
  let reload = () => {
    window.location.reload();
  };


  return (
    <div className="App">
      {/* This Component App.jsx */}
      <div className="container">
        <h2 className="center">Bmi Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="__" />
          </div>

          <div>
            <label>Height (cm)</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)} placeholder="_.__" />
          </div>
          <div>
            <button className='btn' type='submit' onClick={() => calcBmi()} >Submit</button>
            <button className='btn btn-outline' type='submit' className="btn btn-outline"
              type="submit"
              onClick={() => reload()}>Delete Informations</button>
          </div>
          <div className="center">
            <h3>Your Bmi is : {bmi}</h3>
            <p>{message}</p>
          </div>
          <div className="img-container">
            {bmi > 0 ? <img src={image} alt="kvk" /> : <img src="https://medicinehospital.com.tr/endex/bmi-kilo.jpg" alt="bmihesap" />}
            {/* <img src={image} alt="kvk" /> */}

          </div>
          {/* <div className='resim'>
            <div id="preload">
              <img src="http://domain.tld/image-01.png" width="1" height="1" alt="Image 01" />
              <img src="http://domain.tld/image-02.png" width="1" height="1" alt="Image 02" />
              <img src="http://domain.tld/image-03.png" width="1" height="1" alt="Image 03" />
            </div>
          </div> */}
        </form>
      </div>
    </div>
  )
}

export default App