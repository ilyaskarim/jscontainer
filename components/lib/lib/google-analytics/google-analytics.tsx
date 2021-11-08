import Script from "next/script";
export const GoogleAnalytics = () => {
  return (
    <>
      {process.env.NODE_ENV === "production" && (
        <>
          <Script
            id="128390asd"
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-64991398-3"
          ></Script>
          <Script
            id="asdasdasd"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                
                gtag('config', 'UA-64991398-3');`,
            }}
          />
        </>
      )}
    </>
  );
};
