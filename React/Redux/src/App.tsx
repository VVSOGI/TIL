import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import PostListContainer from "./containers/PostListContainer";
import PostListsPage from "./pages/PostListsPage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <BrowserRouter>
      {/* <CounterContainer /> */}
      {/* <PostListContainer /> */}
      <Routes>
        <Route path="/" element={<PostListsPage />} />
        <Route path="/:id" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
