export default function (props: any) {
  return (
    <button
      {...props}
      className={`btn ${props.className} ${props.loading ? "loading" : ""}`}
    >
      {props.loading ? <span className="spinner-border" role="status"></span> : <></>}
      {props.children}
    </button>
  );
}
