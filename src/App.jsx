import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import Main from "./components/main";
import Result from "./components/Result";

const App = () => {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1 className="pb-5">سیستم ثبت اطلاعات بیمه‌گذار</h1>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Form1" element={<Form1 />} />
          <Route path="/Form2" element={<Form2 />} />
          <Route path="/Form3" element={<Form3 />} />
          <Route path="/Form2/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
