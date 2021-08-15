import { EventBus } from "../utils/eventBus";
import { useState, useCallback, useEffect } from "react";

export default function (props: any) {
  const containerLocal = props.containerLocal;

  const [key, forceUpdate] = useState(0);

  useEffect(() => {
    EventBus.$on("runContainer", () => {
      forceUpdate(Math.random());
    });
  }, []);

  return (
    containerLocal.slug && (
      <iframe
        key={key}
        src={`/preview/${containerLocal.slug}`}
        frameBorder="0"
      ></iframe>
    )
  );
}
