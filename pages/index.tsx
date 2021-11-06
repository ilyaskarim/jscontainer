import { Layout, Editor } from "./../components/lib/index";
export default function HomePage() {
  return (
    <Layout showFooter={false} isContainerPage={true}>
      <Editor />
    </Layout>
  );
}
