export default function (props: any) {
    return <button  {...props} className={`btn ${props.className}`} ></button>
}