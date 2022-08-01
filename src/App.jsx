import "./App.css";
import IcecreameView from "./features/icecream/IcecreameView";
import CakeView from "./features/cake/CakeView";
import UserView from "./features/users/UserView";
function App() {
  return (
    <div>
      <IcecreameView />
      <CakeView />
      {/* <UserView /> */}
    </div>
  );
}

export default App;
