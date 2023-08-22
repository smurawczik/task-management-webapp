import { useAppSelector } from "@/store/hooks";

export const Sidenav = () => {
  const user = useAppSelector((state) => state.user);

  if (!user) {
    return null;
  }

  return <div>sidenav</div>;
};
