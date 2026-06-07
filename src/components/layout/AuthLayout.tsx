interface AuthLayoutProps {
  children: React.ReactNode;
  
}

const AuthLayout = ({ children}: AuthLayoutProps) => {
  return (
    <div className="md:min-h-screen flex items-center justify-center">
      <div className="w-full max-w-xl flex flex-col gap-6">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;