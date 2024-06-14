import './App.css';
function App(){
  return (
    <div className = "Wrapper">
    <h1> Background Color Change</h1>
    <input type='color' onChange={
      (e) =>{
        document.body.style.backgroundColor= e.target.value
      }
    }/>
    </div>
  )
}
 export default App