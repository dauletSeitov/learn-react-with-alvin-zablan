const Title = () => {
  console.log("entered title")
  return <div>hello world!</div>
}

const Description = () => {
  console.log("entered description")
  return <div>second component</div>
}

const obj = { name: "Bagdaulet", occupation: 'software enginer' }
const { name } = obj
const { occupation } = obj
console.log(name)
console.log(occupation)

const Message = (props) => {
  console.log("props: ", props)

  const { text, bgColor } = props
  console.log("props.text: ", text)
  console.log("props.color: ", bgColor)
  return <div style={{
    background: bgColor
  }}>{text}</div>
}


const Box = (props) => {
  const { label, bgColor, textColor, large } = props
  console.log("box.props", props)
  return <div style={{
    background: bgColor,
    color: textColor,
    fontSize: large ? '40px' : '12px'
  }}>{label}</div>
}



const App = () => {


  return <div>
    <Title />
    <Title />
    <Title />
    <Description />
    <Description />
    <Message
      text="this is my first props"
      bgColor="red">

    </Message>

    <Message
      text="hi"
      bgColor="green">

    </Message>

    <Message
      text="bye"
      bgColor="blue">

    </Message>
    <Box
      label="my name is Bagdaulet"
      bgColor="CornFlowerBlue"
      textColor="White"
      large={true} />

    <Box
      label="anothe one"
      bgColor="Lavender"
      textColor="Purple"
      large={false} />
    <Box
      label="green stuf"
      bgColor="Green"
      textColor="White"
      large={false} />
    Click on the Vite and React logos to learn more
  </div >


}

export default App
