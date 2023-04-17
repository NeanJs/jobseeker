interface HeaderProps {
  text: string;
  style?: string;
  head?: boolean;
  subhead?: boolean;
}
const Text = ({ text, head, subhead }: HeaderProps) => {
  return (
    <span
      className={`${head && "text-2xl lg:text-4xl font-bold"} ${
        subhead && "text-gray text-md"
      }`}
    >
      {text}
    </span>
  );
};

export { Text };
