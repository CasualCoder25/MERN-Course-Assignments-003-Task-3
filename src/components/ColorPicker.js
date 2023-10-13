import { useState } from "react"
import "./ColorPicker.css"

export function ColorPicker(props) {
  const [bgColor, setBgColor] = useState("")
  const [canPick, setCanPick] = useState(false)
  const ColorPickerStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: bgColor,
  }
  const PickerStyle = {
    width: "100px",
  }
  const ChoiceRowStyle = {
    width: "100%",
  }
  const BoxStyle = {
    width: "30px",
    height: "30px",
    border: "none",
  }
  const handlePick = (event) => {
    setCanPick(false)
    setBgColor(event.target.value)
  }
  return (
    <div
      className="extra-round shadow d-flex flex-column justify-content-center align-items-center"
      style={ColorPickerStyle}
    >
      <div
        className="row d-flex justify-content-center m-2"
        style={ChoiceRowStyle}
      >
        <button
          className="bg-success borderless p-1"
          style={PickerStyle}
          onClick={() => setCanPick(true)}
        >
          Pick a Color
        </button>
      </div>
      <div
        className="row d-flex justify-content-between m-2"
        style={ChoiceRowStyle}
      >
        {canPick
          ? props.colors.map((value) => {
              const MyStyle = { ...BoxStyle, backgroundColor: value }
              return (
                <button
                  className="shadow"
                  style={MyStyle}
                  value={value}
                  onClick={handlePick}
                  key={value}
                ></button>
              )
            })
          : null}
      </div>
    </div>
  )
}
export default ColorPicker
