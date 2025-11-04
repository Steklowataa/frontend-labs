import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Lab1 from "./pages/lab01";
import Lab2 from "./pages/lab02";
import Home from "./pages/Home";
import Lab3 from "./pages/lab03";
import NotFound from "./pages/NotFound";
import { useReducer } from "react";
import AppReducer from "./data/AppReducer";
import AppContext from "./data/AppContext";
import { data } from "./data/module-data"; 
import Lab4 from "./pages/lab04";
import AddPersonForm from "./pages/lab4_add";
import EditPersonForm from "./pages/lab4_edit";
import Lab5Page from "./components/Lab5/Lab5";
import UserDetailsPage from "./pages/userDetailsPage";
import PostCommentsPage from "./pages/PostCommentsPage";





const App: React.FC = () => {
  const initialData = data; 
  const [state, appDispatch] = useReducer(AppReducer, initialData);

  return (
    <AppContext.Provider value={{ items: state, dispatch: appDispatch }}>
      <Router>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/lab1" element={<Lab1 />} />
            <Route path="/lab2" element={<Lab2 />} />
            <Route path="/lab2/:id" element={<Lab2 />} />
            <Route path="/lab3" element={<Lab3 />} />
            <Route path="/lab4" element={<Lab4 />} />
            <Route path="/lab4/add" element={<AddPersonForm />} />
            <Route path="/lab4/edit/:id" element={<EditPersonForm />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/lab5" element={<Lab5Page />} />
            <Route path="/lab5/users/:id" element={<UserDetailsPage />} />
            <Route path="/lab5/posts/:id/comments" element={<PostCommentsPage />} />
          </Route>
        </Routes>
      </Router>
    </AppContext.Provider>
  );
};

export default App;