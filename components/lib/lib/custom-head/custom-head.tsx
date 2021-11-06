import Head from "next/head";

export interface CustomHeadProps {
  title?: string;
}

export const CustomHead = (props: CustomHeadProps) => {
  return (
    <Head>
      <title>{props.title ?? "JS Container"}</title>
    </Head>
  );
};
