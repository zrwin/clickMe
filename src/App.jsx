// index.js

import './styles.css'

const Heading = ()=>{

  const hoverHandler = (e)=>{
    const top = Math.floor(Math.random() * window.innerHeight- 20) + 'px';
    const left = Math.floor(Math.random() * window.innerWidth - 20) + 'px';

    // Change the style of the h1 element
    e.target.style.position = 'absolute'; // Ensure the element is positioned absolutely
    e.target.style.top = top;
    e.target.style.left = left;
  }

  return(<>
  
    <div className="container">
      <h1 onMouseOver={hoverHandler} >Click me</h1>

    </div>
  </>
    ) 
}


const App = ()=>{
  return(
    <>
      <Heading/>
    </>
  )
}

export default App