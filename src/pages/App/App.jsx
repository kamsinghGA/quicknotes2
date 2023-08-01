import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NotesPage from "../NotesPage/NotesPage";
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);

  function addNotes(note) {
    setNotes([...notes, note]);
  }

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route 
              path="/orders/new" 
              element={<NewOrderPage />} 
            />
            <Route 
              path="/orders" 
              element={<OrderHistoryPage />} 
            />
            <Route
              path="/notes"
              element={
                <NotesPage 
                    notes={notes} 
                    user={user} 
                    addNotes={addNotes} 
                />
              }
            />
          </Routes>
        </>
      ) : (
        <AuthPage 
          setUser={setUser} 
          setNotes={setNotes} 
        />
      )}
    </main>
  );
}