import FancyButton from "./FancyButton";
import MyComponents from "./MyComponent"
import './index.css';

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
    <MyComponents
      bgColor="Yellow"
      height={90}
    >hello!</MyComponents>
    <MyComponents
      bgColor="Lavender"
      height={40}
    >goodbye!</MyComponents>
    Click on the Vite and React logos to learn more

    <br />



    <div>place holder</div>
    <div className="text-slate-400 border-4 border-black">two</div>
    <div>place holder</div>
    <div className="text-slate-400 border-x-4 border-black">two</div>
    <div>place holder</div>
    <div className="text-slate-400 border-y-4 border-black">two</div>
    <div>place holder</div>
    <div className="text-slate-400 border-t-4 border-black">border top</div>
    <div>place holder</div>
    <div className="text-slate-400 border-r-4 border-black">border right</div>
    <div>place holder</div>
    <div className="text-slate-400 border-b-4 border-black">border bottom</div>
    <div>place holder</div>
    <div className="text-slate-400 border-l-4 border-black">border left</div>
    <div>place holder</div>

    <div className="text-rose-300 bg-red-700">one</div>
    <div className="text-slate-400 border-2 border-slate-600">two</div>
    <div className="text-2xl bg-emerald-200 text-blue-600">three</div>
    <div className="text-xl text-purple-500">
      <div className="border-4 border-sky-500">four</div>
      <div className="bg-violet-200 border-l-8 border-purple-800">five</div>
      <div className="text-green-600">six</div>
    </div>


    <div className="border-2 border-red-500 p-4 m-4">
      hrllo
    </div>


    <div className="border-2 border-blue-500 px-4 m-4">
      bye
    </div>
    <button className="border-2 bordr-green-600 text-green-400 px-8 py-2 m-4 rounded-md">first</button>
    <button className="rounded-lg bg-sky-400 text-white px-10 py-4 text-3xl m-4 hover:text-base">second</button>
    <button className="bg-violet-100 text-violet-600 px-10 px-8 py-2 rounded-full">third</button>
    <button className="m-4 bg-cyan-700 text-cyan-200 p-10 rounded-lg hover:bg-cyan-200 hover:text-cyan-700 ">forth</button>

    <div className="bg-red-500">todo</div>








    <FancyButton large={false}>click me </FancyButton>
    <FancyButton large={true}>sumbit</FancyButton>

  </div >



}

export default App
