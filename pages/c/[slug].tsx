import Container from "../../components/Container";
import { useRouter } from "next/dist/client/router";

export default function Home() {
    const router = useRouter();
    const slug = router.query.slug;
    return <Container slug={slug} ></Container>
}
