import { useState } from "react";

const Home = () => {
    const [ blogs, setblogs ] = useState([
        {title: "Blog 1", body: "Duis commodo tempor officia.", author: "mario", id: 1},
        {title: "Blog 2", body: "Duis  tempor officia.", author: "yoshi", id: 2},
        {title: "Blog 3", body: " commodo tempor officia.", author: "luigi", id: 3}
    ]);

    return (
        <div className="home">
            {blogs.map((item) => (
                <div className="blog-preview" key={item.id}>
                    <h2>{ item.title }</h2>
                    <p>Written by { item.author }</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;