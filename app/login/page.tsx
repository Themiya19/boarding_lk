"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { Home } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';

export default function LoginPage() {
  useEffect(() => {
    // Inject styles
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      @keyframes blob {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes slideUp {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }

      @keyframes slideIn {
        from { transform: translateX(-20px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }

      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .animate-blob {
        animation: blob 7s infinite;
      }

      .animation-delay-2000 {
        animation-delay: 2s;
      }

      .animation-delay-4000 {
        animation-delay: 4s;
      }

      .animate-spin-slow {
        animation: spin 12s linear infinite;
      }

      .shadow-glow {
        box-shadow: 0 0 25px rgba(255, 255, 255, 0.1);
      }

      .fade-in {
        opacity: 0;
        animation: fadeIn 0.6s ease-out forwards;
      }

      .slide-up {
        opacity: 0;
        animation: slideUp 0.6s ease-out forwards;
      }

      .slide-in {
        opacity: 0;
        animation: slideIn 0.6s ease-out forwards;
      }

      .delay-100 {
        animation-delay: 100ms !important;
      }

      .delay-200 {
        animation-delay: 200ms !important;
      }

      .delay-300 {
        animation-delay: 300ms !important;
      }

      .delay-400 {
        animation-delay: 400ms !important;
      }

      .delay-500 {
        animation-delay: 500ms !important;
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div className="h-screen max-h-screen overflow-hidden flex flex-col md:flex-row">
      {/* Left Section - Image/Brand */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white p-12 flex-col justify-between relative overflow-hidden fade-in">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] -top-32 -left-32 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute w-[500px] h-[500px] -bottom-32 -right-32 bg-indigo-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute w-[500px] h-[500px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10">
          {/* Logo Section with Glow Effect */}
          <div className="flex items-center space-x-3 mb-12 slide-in">
            <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 shadow-glow">
              <Home className="h-8 w-8" />
            </div>
            <span className="font-bold text-2xl tracking-tight">Boarding.lk</span>
          </div>

          {/* Main Content with Modern Typography */}
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 slide-in delay-200">
            Welcome to Your Home Away From Home
          </h1>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed slide-in delay-300">
            Find the perfect boarding place that feels just like home.
          </p>
          
          {/* Enhanced Features List */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 slide-in delay-400">
              <div className="h-3 w-3 bg-blue-300 rounded-full animate-pulse"></div>
              <p className="text-blue-50 font-medium">Verified Properties</p>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 slide-in delay-500">
              <div className="h-3 w-3 bg-blue-300 rounded-full animate-pulse"></div>
              <p className="text-blue-50 font-medium">Secure Payments</p>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 slide-in delay-500">
              <div className="h-3 w-3 bg-blue-300 rounded-full animate-pulse"></div>
              <p className="text-blue-50 font-medium">24/7 Support</p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-12 right-12 w-32 h-32 border border-white/20 rounded-full flex items-center justify-center fade-in delay-500">
            <div className="w-24 h-24 border border-white/40 rounded-full flex items-center justify-center animate-spin-slow">
              <div className="w-16 h-16 border border-white/60 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Updated Background Pattern */}
        <div className="absolute inset-0 opacity-5 fade-in">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25px 25px, white 1%, transparent 0%),
              radial-gradient(circle at 75px 75px, white 1%, transparent 0%),
              linear-gradient(45deg, white 0.5%, transparent 0.5%)
            `,
            backgroundSize: '100px 100px, 100px 100px, 50px 50px'
          }}></div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50 slide-up">
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
            <Button
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="w-full group relative flex items-center justify-center space-x-3 py-7 px-4 border-2 border-gray-200 rounded-xl bg-white text-gray-700 hover:bg-gray-50 hover:border-blue-400 transition-all duration-200"
            >
              <FcGoogle className="w-6 h-6 absolute left-4" />
              <span className="text-lg font-medium">Continue with Google</span>
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">or</span>
              </div>
            </div>

            <div className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <button onClick={() => signIn("google", { callbackUrl: "/" })} className="font-medium text-blue-600 hover:text-blue-500">
                Sign up for free
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 