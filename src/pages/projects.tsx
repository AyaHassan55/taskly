import { useNavigate } from "react-router-dom";

const Project = () => {
  const navigate=useNavigate()
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-md rounded-xl p-10 text-center max-w-md w-full">
        
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome to Project Page
        </h1>

        <p className="text-gray-500 mb-6">
          You need to login to continue using the system.
        </p>

        <button onClick={()=>navigate('/login')} className="w-full cursor-pointer bg-[#003D9B] hover:bg-blue-700 transition text-white font-semibold py-3 rounded-lg">
          Sign In
        </button>

      </div>
    </div>
  );
};

export default Project;