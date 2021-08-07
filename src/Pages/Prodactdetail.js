import { useParams } from "react-router-dom";
const ProdactDitail = () => {
  const params = useParams();
  console.log(params.prodactId);

  return (
    <section>
      <h1>prodacts description is here</h1>
      <p>{params.prodactId}</p>
    </section>
  );
};
export default ProdactDitail;
