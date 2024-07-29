import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App Component', () => {
  test('renders the welcome message on the home page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    
    const welcomeElement = screen.getByText(/willkommen zu unserer Stop-Smoking-Initiative!/i);
    expect(welcomeElement).toBeInTheDocument();
  });

  test('renders the content page', () => {
    render(
      <MemoryRouter initialEntries={['/content']}>
        <App />
      </MemoryRouter>
    );
    
    const contentHeader = screen.getByText(/Content Page Header/i); // Beispiel, wenn der Header in der Content-Seite existiert
    expect(contentHeader).toBeInTheDocument();
  });

  test('navigates to the About page when the About link is clicked', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    
    const aboutLink = screen.getByText(/About/i);
    fireEvent.click(aboutLink);
    
    const aboutHeader = screen.getByText(/About Page Header/i); // Beispiel, wenn der Header in der About-Seite existiert
    expect(aboutHeader).toBeInTheDocument();
  });

  test('renders the footer on all pages', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    
    const footerElement = screen.getByText(/Footer Content/i); // Beispieltext, den du im Footer erwartest
    expect(footerElement).toBeInTheDocument();
  });
})

