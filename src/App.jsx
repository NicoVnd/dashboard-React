import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          TailwindCSS Test ✨
        </h1>
        
        <div className="space-y-4">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105"
          >
            Compteur: {count}
          </button>
          
          <div className="bg-gray-100 rounded-lg p-4">
            <p className="text-gray-600 text-center">
              TailwindCSS fonctionne parfaitement ! 🎉
            </p>
          </div>
          
          <div className="flex space-x-2">
            <div className="flex-1 h-4 bg-red-400 rounded"></div>
            <div className="flex-1 h-4 bg-yellow-400 rounded"></div>
            <div className="flex-1 h-4 bg-green-400 rounded"></div>
            <div className="flex-1 h-4 bg-blue-400 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App