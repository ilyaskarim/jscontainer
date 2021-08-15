export default function () {
  if (process.browser) {
    const els: Array<HTMLDivElement> = [];
    const styleDiv = (div: HTMLDivElement) => {
      const random = Math.floor(Math.random() * 2);
      switch (random) {
        case 0:
          const res = Math.floor(Math.random() * 15);
          div.style.height = `${res}px`;
          div.style.width = `${res}px`;
          div.style.borderRadius = "50%";
          break;
        case 1:
          const width = Math.floor(Math.random() * 10);
          div.style.height = `3px`;
          div.style.width = `${width}px`;
          break;

        default:
          break;
      }
    };
    const bubblesEL = document.querySelector(".bubbles");
    const mainEl = document.querySelector(".bubble-header");
    const colors = [
      "rgb(255 0 0)",
      "rgb(0 102 255)",
      "rgb(255, 235, 59)",
      "rgb(27 0 255)",
      "rgb(247 0 0)",
    ];

    const totalItems = 90;
    for (let index = 0; index < totalItems; index++) {
      const el = document.createElement("div");
      styleDiv(el);
      el.style.position = "absolute";
      el.style.background = colors[Math.floor(Math.random() * colors.length)];
      el.style.left =
        Math.floor(Math.random() * (mainEl?.clientWidth || 0) + 300) + "px";
      el.style.top =
        Math.floor(Math.random() * (mainEl?.clientHeight || 0) - 100) + "px";
      bubblesEL?.append(el);
      els.push(el);
    }
    els.forEach((el, i) => {
      let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12,
      };

      el.animate(
        [
          { transform: "translate(0, 0)" },
          { transform: `translate(${to.x}rem, ${to.y}rem)` },
        ],
        {
          duration: (Math.random() + 1) * 2000, // random duration
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });
  }
}
