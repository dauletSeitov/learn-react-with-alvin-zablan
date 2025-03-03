const QuoteBox1 = ({ quote: { text, author, bio } }) => {
    return (
        <div className="flex flex-col m-4">
            <div className="bg-cyan-600 p-4 w-[400px] text-cyan-200 rounded-t-lg">
                {text}
            </div>
            <div className="bg-slate-100 p-4 flex flex-col items-center rounded-b-lg border border-slate-300">
                <div className="text-cyan-700 text-2xl mb-2">
                    {author}
                </div>
                <div className="text-slate-400">
                    {bio}
                </div>
            </div>
        </div>
    )
}


export default QuoteBox1