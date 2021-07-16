import Button from "../UI/Button";

export default function (props: any) {
    return (
        <>
            <a href={props.href} className={'blog-card'} >
                <div className="blog-card-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8-L1uiqV4WjiQ3kOa5s3DLLoNJWCN7hmwuw&usqp=CAU" alt="" />
                </div>
                <div className="card-content">
                    <p className="tags"><a href="">wapgee.com</a></p>

                    <a href="#">
                        <h4>What to happened people in Switzerland</h4></a>
                    <p>login to your account by using many peoples account bro, login to your account by using many peoples account bro </p>
                    <Button href="#" className="card-btn">Read More</Button>
                </div>
            </a>
        </>
    )
}