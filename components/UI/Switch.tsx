import { Switch } from "@chakra-ui/react";

export default function (props: any) {
  const { name, label, handleChange, defaultChecked } = props;
  return (
    <>
      <Switch
        id="email-alerts"
        name={name}
        defaultValue={defaultChecked}
        onChange={(e) => handleChange(e)}
      />
      {label}
    </>
  );
}
