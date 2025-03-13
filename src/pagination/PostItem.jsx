const PostItem = ({ post }) => {

    return (
        <div className="m-4 rounded-3xl overflow-clip border border-red-500 relative shadow-md">
            <img src={post.image} className="w-64 h-64 object-cover"></img>

            <div className="absolute top-0 right-0 m-2 px-2 bg-gray-800/70 text-white rounded-full">
            <i className="fa-regular fa-heart text-rose-300 mr-1"></i>
            {post.likes}</div>
        </div>
    )
}


export default PostItem