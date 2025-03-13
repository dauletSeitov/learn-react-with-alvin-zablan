import posts from "./posts"
import PostItem from "./PostItem"
import { useState } from "react"
const PAGE_SIZE = 9
const Pagination = () => {

    const [pageIndex, setPageIndex] = useState(0)
    const postItem = posts.slice(pageIndex * PAGE_SIZE, PAGE_SIZE * (pageIndex + 1)).map((p, i) => <PostItem key={i} post={p} />)

    const numPage  = Math.ceil(posts.length / PAGE_SIZE)

    const buttons = []
    for(let i = 0; i < numPage; i++){
        buttons.push(<button key = {i} className="bg-gray-400 text-white rounded-sm m-1 w-4"
        onClick={()=>{setPageIndex(i)}}>{i}</button>)
    }

    return (
        <div className="flex flex-col items-center py-20">
            <div className="border border-black w-full max-w-4xl flex flex-wrap justify-center">
                {postItem}
            </div>
            <div>
                {buttons}
            </div>
        </div>
    )
}

export default Pagination