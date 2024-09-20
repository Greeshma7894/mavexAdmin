import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Plan from './components/Plan';
import CreatePlan from './components/CreatePlan';
import PlanSubmission from './components/PlanSubmission';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Plan />} />
        <Route path="/create-plan" element={<CreatePlan />} />
        <Route path="/plan-submission" element={<PlanSubmission />} />
      </Routes>
    </Router>
  );
}

export default App;
