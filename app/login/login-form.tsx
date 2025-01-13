'use client';

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { Home } from 'lucide-react';
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import styles from './styles.module.css';

export function LoginForm() {
  const [selectedUserType, setSelectedUserType] = useState<string | null>(null);
  const { toast } = useToast();

  return (
    <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 md:hidden mb-8">
          <Home className="h-8 w-8 text-blue-600" />
          <span className="font-bold text-2xl text-blue-600">Boarding.lk</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
        <p className="mt-3 text-gray-600">Sign in to access your account</p>
      </div>

      <div className="mt-10 space-y-6">
        <div className="space-y-4">
          <p className="text-center text-gray-600">I am a:</p>
          <div className="grid grid-cols-2 gap-4">
            <Button
              onClick={() => {
                setSelectedUserType('boarder');
                localStorage.setItem('userType', 'boarder');
              }}
              className={`w-full py-6 border-2 rounded-xl transition-all duration-200 ${
                selectedUserType === 'boarder'
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-blue-400'
              }`}
            >
              <span className="text-lg font-medium">Boarder</span>
            </Button>
            <Button
              onClick={() => {
                setSelectedUserType('proprietor');
                localStorage.setItem('userType', 'proprietor');
              }}
              className={`w-full py-6 border-2 rounded-xl transition-all duration-200 ${
                selectedUserType === 'proprietor'
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-blue-400'
              }`}
            >
              <span className="text-lg font-medium">Proprietor</span>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">or</span>
          </div>
        </div>

        <Button
          onClick={() => {
            if (!selectedUserType) {
              toast({
                variant: "destructive",
                title: "Selection Required",
                description: "Please select whether you are a Boarder or Proprietor first.",
              });
              return;
            }
            signIn("google", { callbackUrl: "/" });
          }}
          className="w-full group relative flex items-center justify-center space-x-3 py-7 px-4 border-2 border-gray-200 rounded-xl bg-white text-gray-700 hover:bg-gray-50 hover:border-blue-400 transition-all duration-200"
        >
          <FcGoogle className="w-6 h-6 absolute left-4" />
          <span className="text-lg font-medium">Continue with Google</span>
        </Button>

        <div className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <button 
            onClick={() => {
              if (!selectedUserType) {
                toast({
                  variant: "destructive",
                  title: "Selection Required",
                  description: "Please select whether you are a Boarder or Proprietor first.",
                });
                return;
              }
              signIn("google", { callbackUrl: "/" });
            }} 
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
} 