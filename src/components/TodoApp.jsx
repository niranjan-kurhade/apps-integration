import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default function TodoApp() {
  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    if (!task.trim()) return
    setTodos([...todos, { id: Date.now(), text: task, done: false }])
    setTask("")
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  return (
    <Card className="shadow-lg border border-gray-200">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-700">Todo List</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-4">
          <Input 
            value={task} 
            onChange={(e) => setTask(e.target.value)} 
            placeholder="Enter todo..." 
          />
          <Button onClick={addTodo}>Add</Button>
        </div>

        <ul className="space-y-3">
          {todos.map(todo => (
            <li key={todo.id} className="flex items-center gap-3 bg-gray-50 p-2 rounded-lg">
              <Checkbox checked={todo.done} onCheckedChange={() => toggleTodo(todo.id)} />
              <span className={todo.done ? "line-through text-gray-500" : "text-gray-800"}>
                {todo.text}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
