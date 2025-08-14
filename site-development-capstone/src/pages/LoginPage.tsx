import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';
import { Alert, AlertDescription } from '../ui/alert';
import { Loader2, AlertCircle, CheckCircle } from 'lucide-react';

export function LoginPage({
  email,
  setEmail,
  password,
  setPassword,
  rememberMe,
  setRememberMe,
  isLoading,
  error,
  success,
  handleLogin,
  showForgotPassword,
  setShowForgotPassword,
  resetEmail,
  setResetEmail,
  handleForgotPassword,
}: any) {
  if (showForgotPassword) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col">
        <div className="p-6">
          <button
            onClick={() => setShowForgotPassword(false)}
            className="text-gray-400 hover:text-white"
          >
            ← Back to Login
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="w-full max-w-sm">
            <div className="text-center mb-8">
              <h2 className="text-white text-xl mb-2">Reset Password</h2>
              <p className="text-gray-400 text-sm">Enter your email to receive reset instructions</p>
            </div>
            {error && (
              <Alert className="mb-4 bg-red-900/50 border-red-500 text-red-200">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <form onSubmit={handleForgotPassword} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  className="w-full bg-gray-800 border-gray-700 text-white placeholder-gray-400 rounded-lg h-12"
                  disabled={isLoading}
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-12 mt-6"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  'Send Reset Instructions'
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <div className="p-6">
        <h1 className="text-gray-400">Login</h1>
      </div>
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <h2 className="text-white text-xl mb-2">Admin Login</h2>
            <p className="text-gray-400 text-sm">Sign in to access the admin panel</p>
          </div>
          {success && (
            <Alert className="mb-4 bg-green-900/50 border-green-500 text-green-200">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>Login successful! Redirecting...</AlertDescription>
            </Alert>
          )}
          {error && (
            <Alert className="mb-4 bg-red-900/50 border-red-500 text-red-200">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Username/Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-800 border-gray-700 text-white placeholder-gray-400 rounded-lg h-12"
                disabled={isLoading}
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-800 border-gray-700 text-white placeholder-gray-400 rounded-lg h-12"
                disabled={isLoading}
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  className="border-gray-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                  disabled={isLoading}
                />
                <label htmlFor="remember" className="text-gray-400 cursor-pointer">
                  Remember Me
                </label>
              </div>
              <button
                type="button"
                onClick={() => setShowForgotPassword(true)}
                className="text-blue-500 hover:text-blue-400"
                disabled={isLoading}
              >
                Forgot Password?
              </button>
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-12 mt-6"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  Signing in...
                </>
              ) : (
                'Login'
              )}
            </Button>
          </form>
          <div className="mt-6 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Demo credentials:</p>
            <p className="text-gray-300 text-xs">Email: admin@example.com</p>
            <p className="text-gray-300 text-xs">Password: admin123</p>
          </div>
        </div>
      </div>
    </div>
  );
}