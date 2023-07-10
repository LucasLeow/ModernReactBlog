import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {

    const { data: blogs , pending, error } = useFetch("http://localhost:8000/blogs")
    return (
        <div className="home">
            { pending && <h4> Loading ... </h4>}
            { error && <h4> { error } </h4>}
            {blogs && <BlogList blogs={blogs} title={"All Blogs"}/>}
            {blogs && <BlogList blogs={blogs.filter(item => item.author === "mario")} title={"Mario's Blogs"}/>}
        </div>
    );
}
 
export default Home;