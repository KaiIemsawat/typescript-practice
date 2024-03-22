import { useState } from "react";
import { AddTodoForm } from "./components/AddTodoForm";
import { TodoList } from "./components/TodoList";
import { dummyData } from "./data/todos";
import { TodoSummary } from "./components/TodoSummary";

function App() {
    const [todos, setTodos] = useState(dummyData);

    const setTodoCompleted = (id: number, completed: boolean) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed } : todo
            )
        );
    };

    const addTodo = (title: string) => {
        setTodos((prevTodos) => [
            {
                id: Date.now(),
                title,
                completed: false,
            },
            ...prevTodos,
        ]);
    };

    const deleteTodo = (id: number) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const deleteAllCompletedTodos = () => {
        setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
    };

    return (
        <main className="py-10 h-screen space-y-5 overflow-y-auto">
            <h1 className="font-bold text-center text-3xl">Todos</h1>
            <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
                <AddTodoForm onSubmit={addTodo} />
                <TodoList
                    todos={todos}
                    onCompletedChange={setTodoCompleted}
                    onDelete={deleteTodo}
                />
            </div>
            <TodoSummary
                todos={todos}
                deleteAllCompleted={deleteAllCompletedTodos}
            />
        </main>
    );
}

export default App;
