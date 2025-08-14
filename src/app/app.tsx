import Header from '../features/profile/components/Header';
import Footer from '../features/profile/components/Footer';
import ProjectList from '../features/projects/components/ProjectList';

export default function App() {
  return (
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main>
        <ProjectList />
      </main>
      <Footer />
    </div>
  );
}
