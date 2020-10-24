const NotFound = (props) => {
  return (
    <pre>
      {JSON.stringify(props, null, 2)}
    </pre>
  );
}

export const getStaticProps = () => {
  return {
    props: {
      is404: true,
    },
  };
};

export default NotFound;

