import {useState} from "react"

const Home = () => {
    const [name, setName] = useState("Alfred")
    const handleClick = () => name == "Alfred" ? setName("David") : setName("Alfred");

    return (
        <div className="home">
            <h2>Welcome, {name}</h2>
            <button onClick={handleClick}>click me to change name</button>
        </div>
    );
}
 
export default Home;



   