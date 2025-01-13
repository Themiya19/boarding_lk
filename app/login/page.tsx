import { AnimatedBackground } from './animated-background';
import { LoginContainer } from './login-container';

export default function LoginPage() {
  return (
    <div className="h-screen max-h-screen overflow-hidden flex flex-col md:flex-row">
      <AnimatedBackground />
      <LoginContainer />
    </div>
  );
} 