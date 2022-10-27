import "./App.css";
import Home from "./Component/HomePage/Home";
import LoginPage from "./Component/LoginPage/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyAk-biVnKTuSMkesYr3MM5ylHOEo3lS95U",
  authDomain: "instaclone-21847.firebaseapp.com",
  projectId: "instaclone-21847",
  storageBucket: "instaclone-21847.appspot.com",
  messagingSenderId: "284770747054",
  appId: "1:284770747054:web:bc57742bedd0eb9077633f",
  measurementId: "G-BRSXB539SM",
};

 const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div>
      {localStorage.getItem("users") == undefined ||
      localStorage.getItem("users") == null ? (
        <LoginPage />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
