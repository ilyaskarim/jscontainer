import { Tooltip2 } from "@blueprintjs/popover2";

export const TrimLargeSentences = (props: { text: string }) => {
  const computed = () => {
    const length = props.text.length;

    if (length > 40) {
      return (
        <Tooltip2 content={props.text}>
          <span>
            {props.text.substr(0, 20) +
              " ... " +
              props.text.substr(length - 20, length)}
          </span>
        </Tooltip2>
      );
    }

    return props.text;
  };

  return <span>{computed()}</span>;
};
