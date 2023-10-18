import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Age from './components/Age';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/age" />} />
      <Route path="/age" element={<Age />} />
    </Routes>
  );
};

export default App;


// Changes to be ignored, its just for testing a bug.