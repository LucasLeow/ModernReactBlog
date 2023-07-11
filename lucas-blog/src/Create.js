import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [ title, setTitle ] = useState("");
    const [ body, setBody ] = useState("");
    const [ author, setAuthor ] = useState("yoshi");
    const [ pending, setPending ] = useState(false); // initially not submitting
    const navigate = useNavigate();

    const handleSubmit = (ev) => {
        ev.preventDefault(); // prevent form from refreshing upon submit
        const blog = {
            title,
            body,
            author
        }

        setPending(true); // begin POST request

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log("New blog created");
            setPending(false); //POST completed
            navigate("/");
        });
    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label> Blog title: </label>
                <input 
                type="text"
                required
                value={title}
                onChange={(ev) => setTitle(ev.target.value)}
                />

            <label> Blog body: </label>
            <textarea 
                name="" 
                id="" 
                cols="30" 
                rows="10"
                required
                value={body}
                onChange={(ev)=>setBody(ev.target.value)}
            ></textarea>

                <label> Blog author: </label>
                <select 
                value={author}
                onChange={(ev)=> setAuthor(ev.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !pending && <button>Add Blog</button>}
                { pending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}
 
export default Create;