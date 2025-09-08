const BlogList = ({blogs, title, handleDelete}) => {

    return (
       <div className="blog-list">
        <h3 className="title">{title}</h3>
         {blogs.map(blog => (
            <div className="blog-preview" key={blog.id}>
                <h4>{blog.title}</h4>
                <div className="blog-desc">
                    <p>Written by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)} className="delete">Delete</button>
                </div>
            </div>
        ))}
       </div>
    );
}
 
export default BlogList;