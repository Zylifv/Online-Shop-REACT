function Button({ value, onClick }: { value: string; onClick: any }) {
  return <button onClick={onClick}>{value}</button>;
}

export default Button;
