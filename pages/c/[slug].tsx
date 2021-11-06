import { Layout, Editor, CustomHead } from "./../../components/lib/index";

export default function ContainerSlug() {
  return (
    <Layout showFooter={false} isContainerPage={true}>
      <CustomHead />
      <Editor />
    </Layout>
  );
}
