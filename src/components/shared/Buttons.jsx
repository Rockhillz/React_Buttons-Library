import "./Buttons.css"

function Buttons( {
    children,
    colorName= "default"
    
} ) {
  return (
    <button className={colorName}>
        { children }
    </button>
  )
}

export default Buttons