import { useEffect } from "react";
import PlaygroundItem from "../components/UI/playgroundItem";
import animationPixelsAndBubbles from "../utils/animationPixelsAndBubbles";
import Head from "next/head";

export default function () {
  useEffect(() => {
    animationPixelsAndBubbles()
  });

  const cardsData = [
    {
      title: "Moment JS",
      para: "Moment Js playground to easily work with dates, format date and play with timezone",
    },
    {
      title: "Slugify",
      para: "Convert any string into slugify. Slugify is used to convert strings into readable URL’s.",
    },
  ];

  return (
    <>
      <Head>
        <title>Playgrounds &middot; JS Container</title>
      </Head>
      <div className="playground-section">
        <div className="jumbotron bubble-header">
          <div className="bubbles"></div>
          <div className="content">
            <h1>Playgrounds</h1>
            <p>Playgrounds to ehance your productivty:</p>
          </div>
        </div>
        <div className="cards-section">
          <div className="row">
            {cardsData.map((item, key: number) => {
              return (
                <div key={key} className="col-sm-4 col-lg-3 col-xs-12">
                  <PlaygroundItem item={item} />
                </div>
              );
            })}
          </div>
          <div className="loadMore">
            <a href="#">More playgounds coming soon...</a>
          </div>
        </div>
      </div>
    </>
  );
}
