import { useState } from "react";

const Create = () => {

    const [ title, setTitle ] = useState("");
    const [ body, setBody ] = useState("");
    const [ author, setAuthor ] = useState("yoshi");

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form action="">
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
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    );
}
 
export default Create;