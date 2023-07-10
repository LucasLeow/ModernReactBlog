import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [ blogs, setBlogs ] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
        .then(res=>res.json())
        .then((data)=>{
            console.log(data);
            setBlogs(data);
        })
    }, [])

    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title={"All Blogs"}/>}
            {blogs && <BlogList blogs={blogs.filter(item => item.author === "mario")} title={"Mario's Blogs"}/>}
        </div>
    );
}
 
export default Home;