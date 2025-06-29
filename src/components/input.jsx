import { useEffect, useState } from "react"

const Input = ({ onAddTask }) => {
    const [newTask, setNewtask] = useState("");
    const [valid, setValid] = useState(false);

    useEffect(() => {
        if (newTask.length > 3) {
            setValid(true)
        } else { setValid(false) }
    }, [newTask])

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddTask(newTask)
    }

    return (
        <>
            typed : {newTask}
            <form id="add-task" onSubmit={handleSubmit}>
                <input className="task-input"
                    value={newTask}
                    placeholder="add new task here"
                    onChange={(event) => {
                        setNewtask(event.target.value)
                    }} />
                <button className='add button task' onClick={handleSubmit}
                    disabled={!valid}
                    type="submit">Add task</button>
            </form>
        </>
    )
}
export default Input