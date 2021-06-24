export default function (props: any) {
  const loadingClass = props.loading ? "loading" : "";
  const disabledClass = props.disabled ? "disabled" : "";
  return (
    <button
      {...props}
      className={`btn ${props.className} ${loadingClass} ${disabledClass}`}
    >
      {props.loading ? <span className="spinner-border" role="status"></span> : <></>}
      {props.children}
    </button>
  );
}
