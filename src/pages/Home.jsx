function Home() {
    const todos = [
        { id: 6, text: "Project Setup", isDone: true },
        { id: 1, text: "View Details", isDone: false },
        { id: 2, text: "Compare .torrent File", isDone: false },
        { id: 3, text: "Create Markdown", isDone: false },
        { id: 4, text: "Live Course details", isDone: false },
        { id: 5, text: "Others", isDone: false },
    ];
    return (
        <div className="mx-auto mt-8">
            <div className="flex w-full justify-center flex-col">
                {todos.map((todo, index) => (
                    <div key={index} className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            id={`todo-${todo.id}`}
                            className="form-checkbox h-5 w-5  checked:accent-green-500"
                            checked={todo.isDone}
                            readOnly
                        />
                        <label htmlFor={`todo-${index}`} className="ml-2">
                            {todo.text}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
