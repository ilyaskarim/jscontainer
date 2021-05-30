import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1>Please design here</h1>
      <h1>
        You can use components from
        <a href="https://evergreen.segment.com/components"  target="_blank">
          https://evergreen.segment.com/components
        </a>
        . For layouts please use custom layout. And use{" "}
        <a href="https://fonts.google.com/specimen/Lato" target="_blank" >
          https://fonts.google.com/specimen/Lato
        </a>{" "}
        font.
      </h1>
    </div>
  );
}
