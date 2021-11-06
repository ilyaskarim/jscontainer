import { CustomHead } from "../components/lib/index";
import { Layout, Editor } from "./../components/lib/index";
export default function HomePage() {
  return (
    <Layout showFooter={false} isContainerPage={true}>
      <CustomHead title="JS Container" />
      <Editor />
    </Layout>
  );
}
