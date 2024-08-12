import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "../Components/Navbar";
import Anasayfa from "../Components/Anasayfa";
import Projeler from "../Components/Projeler";
import Stajyerler from "../Components/Stajyerler";
import DijitalTeam from "../Components/DijitalTeam";
import Project from "../Components/Project";
import Baslarken from "../Components/Baslarken";
import BaslarkenForm from "./BaslarkenForm";
import Kurulum from "../Components/Kurulum";
import KurulumForm from "./KurulumForm";
import DocumentForm from "./DocumentForm";
import Document from "../Components/Document";
import Register from "../Components/Register";
import HelpForm from "./HelpForm";
import Help from "../Components/Help";
import NotFound from "../Components/NotFound";
import { AuthProvider } from "./AuthProvider";
import ProtectedRoute from "./ProtectedRoute";
import Kayitol from "../Components/Kayitol";

function App() {
  return (
    <AuthProvider>
      <Router>
        <ConditionalNavbar />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/kayitol" element={<Kayitol />} />

          <Route
            path="/anasayfa"
            element={
              <ProtectedRoute>
                <Anasayfa />
              </ProtectedRoute>
            }
          />
          <Route
            path="/projeler"
            element={
              <ProtectedRoute>
                <Projeler />
              </ProtectedRoute>
            }
          />
          <Route
            path="/stajyerler"
            element={
              <ProtectedRoute>
                <Stajyerler />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dijitalteam"
            element={
              <ProtectedRoute>
                <DijitalTeam />
              </ProtectedRoute>
            }
          />
          <Route
            path="/proje_ekle"
            element={
              <ProtectedRoute>
                <Project />
              </ProtectedRoute>
            }
          />
          <Route
            path="/baslarken"
            element={
              <ProtectedRoute>
                <Baslarken />
              </ProtectedRoute>
            }
          />
          <Route
            path="/baslarkenForm"
            element={
              <ProtectedRoute>
                <BaslarkenForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/kurulum"
            element={
              <ProtectedRoute>
                <Kurulum />
              </ProtectedRoute>
            }
          />
          <Route
            path="/kurulumForm"
            element={
              <ProtectedRoute>
                <KurulumForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/document"
            element={
              <ProtectedRoute>
                <Document />
              </ProtectedRoute>
            }
          />
          <Route
            path="/documentForm"
            element={
              <ProtectedRoute>
                <DocumentForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/help"
            element={
              <ProtectedRoute>
                <Help />
              </ProtectedRoute>
            }
          />
          <Route
            path="/helpForm"
            element={
              <ProtectedRoute>
                <HelpForm />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

function ConditionalNavbar() {
  const location = useLocation();
  const hideNavbarRoutes = ["/", "/kayitol"];

  return !hideNavbarRoutes.includes(location.pathname) ? (
    <Navbar />
  ) : null;
}

export default App;
