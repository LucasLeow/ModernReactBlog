import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [ blogs, setblogs ] = useState([
        {title: "Blog 1", body: "Duis commodo tempor officia.", author: "mario", id: 1},
        {title: "Blog 2", body: "Duis  tempor officia.", author: "yoshi", id: 2},
        {title: "Blog 3", body: " commodo tempor officia.", author: "luigi", id: 3}
    ]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title={"propsTitle"}/>
        </div>
    );
}
 
export default Home;