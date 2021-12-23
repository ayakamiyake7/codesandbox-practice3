import { Link, useHistory } from "react-router-dom";

export const Page1DetailB = () => {
  const history = useHistory();
  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page1DetailB</h1>
      <Link to="/Page1">TOP</Link>
      <br />
      <button onClick={onClickBack}>Back</button>
    </div>
  );
};
