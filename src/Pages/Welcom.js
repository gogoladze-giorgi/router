import { Route } from "react-router-dom";
const Welcome = () => {
  return (
    <sectiom>
      <h1>the welcom page</h1>
      <Route path="/Welcome/new-user">
        <p>Welcome,new user!</p>
      </Route>
    </sectiom>
  );
};
export default Welcome;
