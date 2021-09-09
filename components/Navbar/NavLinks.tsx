import { useRouter } from "next/dist/client/router";

export default function NavLink() {
  const router = useRouter();
  return (
    <>
      <li className="nav-item ">
        <a
          className={`nav-link link ${
            router.route.includes("terms-and-condition") ? "active" : ""
          }`}
          href="/terms-and-conditions"
        >
          Terms and Condition
        </a>
      </li>
      {/* <li className="nav-item">
        <a
          className={`nav-link link ${
            router.route.includes("playgrounds") ? "active" : ""
          } `}
          href="/playgrounds"
        >
          Playgrounds
        </a>
      </li> */}
      <li className="nav-item">
        <a
          className={`nav-link link ${
            router.route.includes("about") ? "active" : ""
          }`}
          href="/about"
        >
          About Us
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link link ${
            router.route.includes("blog") ? "active" : ""
          }`}
          href="/blog"
        >
          Blog
        </a>
      </li>
    </>
  );
}
