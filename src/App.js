import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed.jsx";
import Upload from "./pages/Upload.jsx";
import ViewComment from "./pages/ViewComment.jsx";
import ViewLike from "./pages/ViewLike.jsx";
import Explore from "./pages/Explore.jsx";
import DeleteAccount from "./pages/DeleteAccount.jsx";
import Logout from "./pages/Logout.jsx";
import Chat from "./pages/Chat.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import Update from "./pages/Update.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Connections from "./pages/Connections.jsx";
import Requests from "./pages/Requests.jsx";
import Profile from "./pages/Profile.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-[var(--bgcolor)] text-[var(--textcolor)] py-2 rounded-none     ">
        <Navbar />

        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/viewlike" element={<ViewLike />} />
          <Route path="/viewcomment" element={<ViewComment />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/deleteaccount" element={<DeleteAccount />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/me" element={<MyProfile />} />
          <Route path="/update" element={<Update />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/profile/*" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// CHAT PAGE(PENDING)
