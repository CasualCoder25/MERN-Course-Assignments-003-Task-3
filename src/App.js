import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ColorPicker from "./components/ColorPicker"

function App() {
  const AppStyle = {
    width: "100%",
    height: "100vh",
  }
  const ColorPickerStyle = {
    width: "75%",
    height: "75%",
  }
  const colorArray = [
    "red",
    "green",
    "blue",
    "yellow",
    "rgb(170, 51, 106)",
    "cyan",
    "orange",
    "purple",
    "pink",
    "darkgreen",
    "rgb(248, 152, 128)",
    "darkcyan",
    "brown",
    "darkorange",
    "darkblue",
    "rgb(255, 192, 0)",
  ]
  return (
    <div
      className="d-flex justify-content-center align-items-center bg-purple-gradient"
      style={AppStyle}
    >
      <div style={ColorPickerStyle}>
        <ColorPicker colors={colorArray} />
      </div>
    </div>
  )
}

export default App
