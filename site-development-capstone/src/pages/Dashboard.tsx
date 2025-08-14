import { Dashboard } from '../Dashboard';
import { WebsiteContent } from './WebsiteContent';
import { ProgramInfo } from './ProgramInfo';
import { CandidateData } from './CandidateData';

export function DashboardPage({
  currentPage,
  user,
  onNavigate,
  onLogout,
  setCurrentPage,
}: any) {
  switch (currentPage) {
    case 'dashboard':
      return (
        <Dashboard
          user={user}
          onNavigate={onNavigate}
          onLogout={onLogout}
        />
      );
    case 'website-content':
      return <WebsiteContent onBack={() => setCurrentPage('dashboard')} />;
    case 'program-info':
      return <ProgramInfo onBack={() => setCurrentPage('dashboard')} />;
    case 'candidate-data':
      return (
        <CandidateData
          user={user}
          onBack={() => setCurrentPage('dashboard')}
          onLogout={onLogout}
          onNavigate={onNavigate}
        />
      );
    default:
      return null;
  }
}