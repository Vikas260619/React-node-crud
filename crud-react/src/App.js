import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PostList } from "./components/pages/PostList";
import { Form } from "./components/pages/Form";
import { Header } from "./components/modules/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<PostList />}></Route>
          <Route path="/form" element={<Form />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
