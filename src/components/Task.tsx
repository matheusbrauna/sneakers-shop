interface TaskProps {
  task: {
    title: string
  }
  onHandleDeleteTask: (title: string) => void
}

export function Task({ task, onHandleDeleteTask }: TaskProps) {
  return (
    <li>
      {task.title}
      <button onClick={() => onHandleDeleteTask(task.title)}>Deletar</button>
    </li>
  )
}
