type TProps = { name: string };

export const UserName = ({ name }: TProps) => {
  return <p className="text-primary text-lg font-bold">{name}</p>;
};
