import "./App.css";
import SignIn from "./components/SignIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.js";
import Line from "./components/Line.js";

function App() {
  const [user] = useAuthState(auth);
  // 条件に合致していた場合、そのコンポーネントの中身を表示する
  return <div>{user ? <Line></Line> : <SignIn></SignIn>}</div>;
}

export default App;
