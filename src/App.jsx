import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSwipeable } from 'react-swipeable';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Main/Home';
import Resume from './components/Main/Resume';
import Portfolio from './components/Main/Portfolio';
import Lets_connect from './components/Main/lets_connect';
import './App.css'; // Import the CSS file with transition styles

const AppContent = () => {
  const location = useLocation();
  const [direction, setDirection] = useState(null);

  const handlers = useSwipeable({
    onSwipedLeft: () => setDirection('left'),
    onSwipedRight: () => setDirection('right'),
  });

  return (
    <div className="content" {...handlers}>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={1000}  // Match the new CSS transition duration
          classNames={{
            enter: `page-transition-${direction}-enter`,
            enterActive: `page-transition-${direction}-enter-active`,
            exit: `page-transition-${direction}-exit`,
            exitActive: `page-transition-${direction}-exit-active`,
          }}
        >
          <div>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/lets_connect" element={<Lets_connect />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Sidebar />  {/* Sidebar is placed outside the transition area */}
      <AppContent />
    </Router>
  );
}

export default App;
