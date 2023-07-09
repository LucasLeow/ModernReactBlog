const Home = () => {

    const handleClick = () => {
        console.log("test");
    }

    const handleClickAgain = (name) => {
        console.log("Hello ", name);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(ev)=>{
                console.log(ev); // or can pass to handleClickAgain fn to be accessed
                handleClickAgain("mario")
                }}>Click me again</button>
        </div>
    );
}
 
export default Home;