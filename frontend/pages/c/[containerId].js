import { useRouter } from "next/router";
import Playground from "./../../components/Playground/Index";
export default function Home() {
  const router = useRouter();
  const containerId = router.query.containerId;
  const version = router.query.v;
  return <Playground containerId={containerId} version={version}></Playground>;
}
