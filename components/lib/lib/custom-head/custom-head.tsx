import Head from "next/head";

export interface CustomHeadProps {
  title?: string;
}

export const CustomHead = (props: CustomHeadProps) => {
  return (
    <Head>
      <title>{props.title ?? "JS Container"}</title>

      <meta
        name="description"
        content="An online code editor to write frontend code using HTML5, Css, Javascript and Typescript."
      />
      <meta
        name="keywords"
        content="online html format, online css editor, online typescript formatter, online typescript editor, online javascript editor"
      />
      <meta name="author" content="JSContaienr" />
      <meta name="copyright" content="share" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
    </Head>
  );
};
