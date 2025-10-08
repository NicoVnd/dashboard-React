import { useState, useEffect } from 'react'

function TodoList() {
  // États pour gérer les données
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  // Charger les tâches sauvegardées au démarrage
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])

  // Sauvegarder automatiquement quand la liste change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // Ajouter une nouvelle tâche
  const addTodo = () => {
    if (newTodo.trim() === '') return
    
    const todo = {
      id: Date.now(),
      text: newTodo.trim(),
      done: false
    }
    
    setTodos([...todos, todo])
    setNewTodo('')
  }

  // Supprimer une tâche
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Marquer une tâche comme terminée/non terminée
  const toggleDone = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id 
        ? { ...todo, done: !todo.done }
        : todo
    ))
  }

  // Ajouter une tâche avec la touche Entrée
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      {/* En-tête avec titre et compteur */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">📝 Todo List</h2>
        <span className="text-sm text-gray-500">
          {todos.filter(todo => !todo.done).length} restante(s)
        </span>
      </div>

      {/* Formulaire pour ajouter une tâche */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ajouter une tâche..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Ajouter
        </button>
      </div>

      {/* Liste des tâches */}
      <div className="space-y-2 max-h-64 overflow-y-auto">
        {todos.length === 0 ? (
          <p className="text-gray-500 text-center py-4 italic">
            Aucune tâche pour le moment
          </p>
        ) : (
          todos.map(todo => (
            <div
              key={todo.id}
              className={`flex items-center gap-3 p-3 rounded-md border transition-all duration-200 ${
                todo.done 
                  ? 'bg-gray-50 border-gray-200' 
                  : 'bg-white border-gray-300 hover:border-gray-400'
              }`}
            >
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleDone(todo.id)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              
              <span
                className={`flex-1 transition-all duration-200 ${
                  todo.done 
                    ? 'text-gray-500 line-through' 
                    : 'text-gray-900'
                }`}
              >
                {todo.text}
              </span>
              
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700 focus:outline-none p-1 rounded transition-colors"
                title="Supprimer"
              >
                ✖️
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default TodoList
