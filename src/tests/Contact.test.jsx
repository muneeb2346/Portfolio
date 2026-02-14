import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../components/Contact';

describe('Contact Component', () => {
  test('renders contact form', () => {
    render(<Contact id="contact" setActiveSection={() => {}} />);
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  });

  test('validates required fields', async () => {
    render(<Contact id="contact" setActiveSection={() => {}} />);
    
    const submitButton = screen.getByText(/Send Message/i);
    fireEvent.click(submitButton);
    
    expect(await screen.findByText(/Name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Email is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Subject is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Message is required/i)).toBeInTheDocument();
  });
});