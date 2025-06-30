import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SubstanceAbuseInterventionPage from './pages/SubstanceAbuseInterventionPage';
import STDHIVAIDSInterventionPage from './pages/STDHIVAIDSInterventionPage';
import RehabilitationServicesPage from './pages/RehabilitationServicesPage';
import CommunityEducationPage from './pages/CommunityEducationPage';
import WomensHealthPage from './pages/WomensHealthPage';
import CommunityOutreachPage from './pages/CommunityOutreachPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/programs/substance-abuse-intervention" element={<SubstanceAbuseInterventionPage />} />
      <Route path="/programs/std-hiv-aids-intervention" element={<STDHIVAIDSInterventionPage />} />
      <Route path="/programs/rehabilitation-services" element={<RehabilitationServicesPage />} />
      <Route path="/programs/community-education" element={<CommunityEducationPage />} />
      <Route path="/programs/womens-health" element={<WomensHealthPage />} />
      <Route path="/programs/community-outreach" element={<CommunityOutreachPage />} />
    </Routes>
  );
}

export default App;