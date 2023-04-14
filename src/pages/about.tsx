import { GetServerSideProps } from "next";

export default function About() {
  return (
    <>
      <div>
        <h1>About</h1>
      </div>
    </>
  );
}

export async function getServerSideProps(
  context: GetServerSideProps
) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
