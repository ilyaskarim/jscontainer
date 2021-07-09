import { useEffect } from "react";
import PlaygroundItem from "../components/UI/playgroundItem";

export default function () {
  useEffect(() => {
    // let ball = document.createElement("div");
    let dd = document.querySelector(".bubbles")
    // Some random colors
    const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

    const numBalls = 50;
    const balls = [];

    for (let i = 0; i < numBalls; i++) {
      let ball = document.createElement("div");
      ball.classList.add("ball");
      ball.style.background = colors[Math.floor(Math.random() * colors.length)];
      ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
      ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
      ball.style.transform = `scale(${Math.random()})`;
      ball.style.width = `${Math.random()}em`;
      ball.style.height = ball.style.width;
      // ball.style.opacity = `0`;

      balls.push(ball);
      dd?.append(ball)
    }

    // Keyframes
    balls.forEach((el, i, ra) => {
      let to = {
        x: Math.random() * (i % 2 === 0 ? -10 : 120),
        y: Math.random() * 3,
      };

      let anim = el.animate(
        [
          { transform: "translate(40rem)" },
          { animation: "fadeIn ease 8s"},
          
          { transform: `translate(${to.x}rem, ${to.y}rem)` },
        ],
        {
          duration: (Math.random() + 1) * 3000, // random duration
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out",
          opacity: '1',
          
        }
      );
    });
  });

  const cardsData = [
    {
      title: "Moment JS",
      para: "Moment Js playground to easily work with dates, format date and play with timezone",
    },
    {
      title: "Slugify",
      para: "Convert any string into slugify. Slugify is used to convert strings into readable URL’s.",
    }
  ]


  return (
    <div className="playgrounds_section">
      <div className="playgrounds_image">
        <div className="bubbles"></div>
        <div className="content">
            <h1>Playgrounds</h1>
            <p>Playgrounds to ehance your productivty:</p>
        </div>
      </div>
      <div className="cards-section">
        {cardsData.map((item) => {
          return(
            <PlaygroundItem item={item}/>
            )
          })
        }
        <div className="loadMore">
          <a href="#">More playgounds coming soon...</a>
        </div>
      </div>
    </div>
  );
}
