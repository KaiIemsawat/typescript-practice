import TodoItem from "./components/TodoItem";
import { dummyData } from "./data/todos";

function App() {
    const setTodoCompleted = (id: number, completed: boolean) => {
        alert(
            `Todo with id ${id} is now ${
                completed ? "completed" : "not completed"
            }`
        );
    };

    return (
        <main className="py-10 h-screen space-y-5">
            <h1 className="font-bold text-center text-3xl">Todo</h1>
            <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
                <div className="space-y-2">
                    {dummyData.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onCompletedChange={setTodoCompleted}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default App;
