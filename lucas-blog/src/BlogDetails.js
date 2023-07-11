import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data, pending, error } = useFetch(`http://localhost:8000/blogs/${id}`);

    return ( 
        <div className="blog-details">
            { pending && <h4> Loading.. </h4> }
            { error && <h4> {error} </h4> }
            { data && (
                <article>
                    <h2> { data.title } </h2>
                    <p> Written by { data.author }</p>
                    <p> { data.body }</p>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;