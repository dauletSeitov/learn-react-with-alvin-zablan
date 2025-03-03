const QuoteBox3 = ({ quote: { text, author, bio } }) => {
    return (
        <div className="flex flex-col items-start border-2 border-red-600">
            <div className="bg-rose-400 text-white p-6 text-lg rounded-t-lg rounded-br-lg">
                {text}
            </div>
            <div className="border-2 border-blue-400 p-4 bg-rose-100 rounded-b-lg">
                <div className="text-rose-700 text-lg">{author}</div>
                <div className="text-rose-500">{bio}</div>
            </div>
        </div>
    )
}


export default QuoteBox3