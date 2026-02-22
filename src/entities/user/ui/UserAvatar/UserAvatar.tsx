import Image from 'next/image';

type TProps = {
  src: string;
  name: string;
  priority?: boolean;
};

export const UserAvatar = ({ src, name, priority = false }: TProps) => {
  return (
    <Image
      width={55}
      height={55}
      src={src}
      alt={`avatar-${name}`}
      className="rounded-full"
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
    />
  );
};
