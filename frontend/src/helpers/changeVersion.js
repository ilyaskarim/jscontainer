export default function (version) {
  let s = version || "0.0";
  const split = s.split(".");
  const first = parseInt(split[0]);
  const second = parseInt(split[1]);

  return `${second == 9 ? first + 1 : first}.${second == 9 ? 0 : second + 1}`;
}
