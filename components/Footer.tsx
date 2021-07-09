export default function Footer() {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} - &nbsp; 
      <span className="brand">
        Js <span>Container</span>
      </span>
      . All Rights Reserved
    </footer>
  );
}
