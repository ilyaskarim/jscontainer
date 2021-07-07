import { useRouter } from "next/dist/client/router";

export default function Profile() {
  const router = useRouter();
  const id = router.query?.id;
  return <div>Profile {id}</div>;
}
