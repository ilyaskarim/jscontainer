import Button from "../UI/Button";

export default function (props: any) {
    const blog = props.blog;
    return (
        <>
            <a href={blog.link} target="_blank" className={'blog-card'} >
                <div className="blog-card-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8-L1uiqV4WjiQ3kOa5s3DLLoNJWCN7hmwuw&usqp=CAU" alt="" />
                </div>
                <div className="card-content">
    <span className="tags"><a href={blog.site}>{blog.site}</a></span>

                    <a href={blog.link} target="_blank" >
                        <h4>{blog.title}</h4></a>
                    <p>
                        {blog.description}
                    </p>
                    <Button href={blog.link} target="_blank" className="card-btn">Read more</Button>
                </div>
            </a>
        </>
    )
}