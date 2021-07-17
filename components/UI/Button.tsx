import Link from "next/link";
export default function (props: any) {
  const loadingClass = props.loading ? "loading" : "";
  const disabledClass = props.disabled ? "disabled" : "";
  const href = props.href;
  const className = `btn ${props.className} ${loadingClass} ${disabledClass}`;

  const Loader = () =>
    props.loading ? (
      <span className="spinner-border" role="status"></span>
    ) : (
      <></>
    );

  if (href) {
    return (
      <Link href={href} {...props}>
        <a {...props} className={className}>
          <Loader></Loader>
          {props.children}
        </a>
      </Link>
    );
  }
  return (
    <button {...props} className={className}>
      <Loader></Loader>
      {props.children}
    </button>
  );
}
