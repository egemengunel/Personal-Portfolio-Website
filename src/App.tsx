import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { Technologies } from './components/Technologies';
import { ThemeToggle } from './components/ThemeToggle';
import { Footer } from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { CVDownload } from './components/CVDownload';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <Header />
          <CVDownload />
          <Technologies />
          <Projects />
          <Footer />
          <div className="fixed bottom-6 right-6">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;