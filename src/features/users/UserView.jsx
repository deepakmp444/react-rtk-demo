import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

function UserView() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h2>List of User</h2>
      {user.loading && <h1>Loading...</h1>}
      {!user.loading && user.error ? <div>{user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
      ) : null}
    </div>
  );
}

export default UserView;
