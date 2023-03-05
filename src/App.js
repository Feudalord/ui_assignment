import React from 'react'
import './App.css'
import friendlogo from './assets/friend.png'

const root = document.documentElement;

document.addEventListener('mousemove', evt => {
  let x = evt.clientX / 400 - 0.2;
  let y = evt.clientY / 400 - 0.2;
  root.style.setProperty('--mouse-x-b1', x);
  root.style.setProperty('--mouse-y-b1', y);
});

document.addEventListener('mousemove', evt => {
  let x = evt.clientX / 400 - 1.4;
  let y = evt.clientY / 400 - 0.2;
  root.style.setProperty('--mouse-x-b2', x);
  root.style.setProperty('--mouse-y-b2', y);
});

document.addEventListener('mousemove', evt => {
  let x = evt.clientX / 400 - 2.6;
  let y = evt.clientY / 400 - 0.2;
  root.style.setProperty('--mouse-x-b3', x);
  root.style.setProperty('--mouse-y-b3', y);
});


const App = () => {
  return (
    <div className='App'>
      <div className='box1' id='b1'>
        <img src={friendlogo} alt='logo1' className='logo'></img>
        <h2 className='text'>Dorakyi</h2>
        <button className='button' id='b1'>Button Label</button>
        <div className='footer'>
            <div className='Description'>
                <h2>3.14%</h2>
                <h3>Description</h3>
            </div>
            <div className='Description'>
                <h2>3.14%</h2>
                <h3>Description</h3>
            </div>
        </div>
        </div>
      <div className='box2'>
        <img src={friendlogo} alt='logo2' className='logo'></img>
        <h2 className='text'>Dorakyi</h2>
        <button className='button' id='b2'>Button Label</button>
        <div className='footer'>
            <div className='Description'>
                <h2>3.14%</h2>
                <h3>Description</h3>
            </div>
            <div className='Description'>
                <h2>3.14%</h2>
                <h3>Description</h3>
            </div>
        </div>
        </div>
      <div className='box3'>
        <img src={friendlogo} alt='logo3' className='logo'></img>
        <h2 className='text'>Dorakyi</h2>
        <button className='button' id='b3'>Button Label</button>
        <div className='footer'>
            <div className='Description'>
                <h2>3.14%</h2>
                <h3>Description</h3>
            </div>
            <div className='Description'>
                <h2>3.14%</h2>
                <h3>Description</h3>
            </div>
        </div>
        </div>
    </div>
  )
}

export default App
