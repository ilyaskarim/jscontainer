import { Layout, Editor } from "./../../components/lib/index";

export default function ContainerSlug() {
  return (
    <Layout showFooter={false} isContainerPage={true}>
      <Editor />
    </Layout>
  );
}
