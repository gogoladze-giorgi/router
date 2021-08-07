import { Link } from "react-router-dom";
const Product = () => {
  return (
    <section>
      <h1>the prodact page</h1>
      <ul>
        <li>
          <Link to="/prodact/p1">a book</Link>
        </li>
        <li>
          <Link to="/prodact/p2">a carpet</Link>
        </li>
        <li>
          <Link to="/prodact/p3">an online Course</Link>
        </li>
      </ul>
    </section>
  );
};
export default Product;
