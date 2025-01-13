'use client';

import styles from './styles.module.css';
import { LoginForm } from './login-form';

export function LoginContainer() {
  return (
    <div className={`flex-1 flex items-center justify-center p-8 bg-gray-50 ${styles.slideUp}`}>
      <LoginForm />
    </div>
  );
} 