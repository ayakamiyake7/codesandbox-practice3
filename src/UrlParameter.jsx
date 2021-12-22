import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);

  return (
    <div>
      <h1>This is URL Parameter.</h1>
      <p>The Parameter is {id}.</p>
      <p>The Queryparameter is {query.get("name")}.</p>
    </div>
  );
};
