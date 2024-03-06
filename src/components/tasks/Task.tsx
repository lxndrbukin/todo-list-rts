interface TaskProps {
  content: string;
}

export default function Task({ content }: TaskProps): JSX.Element {
  return <li>{content}</li>;
}
