import {useState} from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [name, setName] = useState("Alfred")
    const handleClick = () => name == "Alfred" ? setName("David") : setName("Alfred");
    const [blogs, setBlogs] = useState([
        {title: "My first webpage!", body: "Lorem ipsum...", author: "William", id: 1}, 
        {title: "Why crabs are the best animal", body: "Lorem ipsum...", author: "Bertil", id: 2},   
        {title: "The scam we all fall for", body: "Lorem ipsum...", author: "Marco", id: 3} 
    ])

    return (
        <div className="home">
            <h2>Welcome, {name}</h2>
            <BlogList blogs={blogs} title="All Blogs"/>
            <button onClick = {handleClick}>Click me!</button>
        </div>
    );
}
 
export default Home;



   