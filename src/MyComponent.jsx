
const MyComponents = (props) => {

    const { height, bgColor } = props
    return <div style={{
        height: height + 'px',
        background: bgColor
    }}>
        <div>hello first</div>
        {props.children}
    </div>
}

export default MyComponents