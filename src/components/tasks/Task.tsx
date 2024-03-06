interface TaskProps {
  id: number;
  content: string;
  createdAt: string;
}

export default function Task({
  id,
  content,
  createdAt,
}: TaskProps): JSX.Element {
  return (
    <li>
      <div>{content}</div>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </li>
  );
}
