import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [ blogs, setBlogs ] = useState([
        {title: "Blog 1", body: "Duis commodo tempor officia.", author: "mario", id: 1},
        {title: "Blog 2", body: "Duis  tempor officia.", author: "yoshi", id: 2},
        {title: "Blog 3", body: " commodo tempor officia.", author: "luigi", id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(item => item.id !== id);
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            <BlogList blogs={blogs} title={"All Blogs"} handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter(item => item.author === "mario")} title={"Mario's Blogs"}/>
        </div>
    );
}
 
export default Home;