type TProps = {
  message?: string;
};

export const EmptyState = ({ message }: TProps) => {
  return (
    <div className="flex h-full items-center justify-center">
      <p className="text-gray-400">{message}</p>
    </div>
  );
};
