import Show from "./components/Show";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Header from "./components/Header";
import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Show />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
