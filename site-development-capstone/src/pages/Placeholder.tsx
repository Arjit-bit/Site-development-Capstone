import { Button } from '../ui/button';

export function PlaceholderPage({ title, description, setCurrentPage }: any) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <Button
              variant="ghost"
              onClick={() => setCurrentPage('dashboard')}
              className="text-gray-400 hover:text-white"
            >
              ← Back to Dashboard
            </Button>
            <div>
              <h1 className="text-2xl">{title}</h1>
              <p className="text-gray-400">{description}</p>
            </div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-12 text-center">
            <div className="text-6xl mb-4">🚧</div>
            <h2 className="text-xl text-white mb-2">Coming Soon</h2>
            <p className="text-gray-400 mb-6">This feature is currently under development.</p>
            <Button
              onClick={() => setCurrentPage('dashboard')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Return to Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}