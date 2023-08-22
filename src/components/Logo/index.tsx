import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src="/logo.png"
      width={180}
      height={180}
      alt="Picture of the author"
    />
  );
};
