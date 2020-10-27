const Slug = () => null;

export const getStaticProps = () => {
  return {
    notFound: true,
  };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default Slug;

