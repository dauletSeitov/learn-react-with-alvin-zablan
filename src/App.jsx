const Title = () => {
  console.log("entered title")
  return <div>hello world!</div>
}

const Description = () => {
  console.log("entered description")
  return <div>second component</div>
}

const obj = {name: "Bagdaulet", occupation: 'software enginer'}
const{name } = obj
const{occupation } = obj
console.log(name)
console.log(occupation)

const Message = (props) => {
  console.log("props: ", props)

  const {text, bgColor} = props
  console.log("props.text: ", text)
  console.log("props.color: ", bgColor)
  return <div style={{
    background: bgColor
  }}>{text}</div>
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
    Click on the Vite and React logos to learn more
  </div >


}

export default App
