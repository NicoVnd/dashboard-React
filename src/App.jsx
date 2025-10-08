import { useState } from 'react'
import './App.css'
import Clock from './components/clock'
import TodoList from './components/todo'



function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">Mon Dashboard</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Widget 1 - Horloge */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">🕐 Horloge</h2>
            </div>
            <div className="text-center">
              <Clock />
            </div>
          </div>

          {/* Widget 2 - Todo List */}
          <TodoList />

          {/* Espace pour un futur widget */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 border-dashed">
            <div className="text-center text-gray-400">
              <div className="text-4xl mb-2">📊</div>
              <div className="text-sm">
                Futur widget
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

export default App