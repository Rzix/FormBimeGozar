import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Result from "./components/Result";

const App = () => {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>سیستم ثبت اطلاعات بیمه‌گذار</h1>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
