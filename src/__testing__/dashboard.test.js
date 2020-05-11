import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Dashboard from '../components/dashboard/Dashboard';


afterEach(cleanup);

describe('<Dashboard />', () => {

  it('should render without crashing', () => {
    render(<Dashboard />);
  });
  
});