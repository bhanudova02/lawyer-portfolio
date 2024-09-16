export function LoadingSpinner() {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <div className="relative flex flex-col items-center">
          {/* Button with spinner */}
          <button
            type="button"
            className="flex items-center bg-indigo-500 text-white px-4 py-2 rounded-md"
            disabled
          >
            <svg
              className="animate-spin h-5 w-5 mr-3 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="none"
                d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12z"
              />
            </svg>
            Processing...
          </button>
          {/* Additional message */}
          <div className="mt-4 text-gray-500 text-lg font-medium text-center md:text-start w-[80%] mx-auto md:w-full">
            Please wait while we process your request...
          </div>
        </div>
      </div>
    );
  }
  