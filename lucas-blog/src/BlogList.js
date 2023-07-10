const BlogList = ({blogs, title, handleDelete}) => {
    return ( 
        
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((item) => (
                <div className="blog-preview" key={item.id}>
                    <h2>{ item.title }</h2>
                    <p>Written by { item.author }</p>
                    <button onClick={()=>{handleDelete(item.id)}}>Delete</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;