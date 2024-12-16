import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/wrappers/App';

// Add bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// Add our style
import './assets/style/index.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);


