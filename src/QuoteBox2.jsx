const QuoteBox2 = ({ quote: { text, author, bio } }) => {
    return (
        <div className="m-4 flex">
            <div className="bg-blue-500 w-64 p-4 rounded-l-lg">
                <div className="text-3xl text-white mb-2">
                    {author}
                </div>
                <div className="text-blue-300">
                    {bio}
                </div>
            </div>
            <div className="border border-stone-300 w-64 p-12 text-stone-600 rounded-r-full">
                {text}
            </div>
        </div>
    )
}


export default QuoteBox2