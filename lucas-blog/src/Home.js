import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [ blogs, setBlogs ] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
            .then(res=>res.json())
            .then((data)=>{
                setBlogs(data);
                setPending(false);
            })
            .catch((err)=>{console.log(err)});
        }, 1000)
    }, []);
        
    return (
        <div className="home">
            { pending && <h4> Loading ... </h4>}
            {blogs && <BlogList blogs={blogs} title={"All Blogs"}/>}
            {blogs && <BlogList blogs={blogs.filter(item => item.author === "mario")} title={"Mario's Blogs"}/>}
        </div>
    );
}
 
export default Home;