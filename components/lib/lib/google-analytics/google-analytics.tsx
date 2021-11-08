export const GoogleAnalytics = () => {
  return (
    <>
      {process.env.NODE_ENV === "production" && (
        <>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-64991398-3"
          ></script>
          <script
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
