// Importiere die erforderlichen Test-Utils
import '@testing-library/jest-dom/extend-expect';

// Optionale zusätzliche Setups, wie Mocking von APIs oder globalen Stilen
// Hier ist ein Beispiel für das Setzen eines globalen Mock für das Fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

// Optional: Setup für Testlaufzeit-Utilities oder globale Konfigurationen
