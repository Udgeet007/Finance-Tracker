import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DashBoard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { FinacialRecordsProvider } from "./contexts/finacial-record-context";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <FinacialRecordsProvider>
                <DashBoard />
              </FinacialRecordsProvider>
            }
          />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
