

function AuthPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold">Welcome to the App</h1>
      <div className="flex gap-4">
        <SignInButton>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign In
          </button>
        </SignInButton>
        <SignUpButton>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Sign Up
          </button>
        </SignUpButton>
      </div>
    </div>
  );
}

export default AuthPage;