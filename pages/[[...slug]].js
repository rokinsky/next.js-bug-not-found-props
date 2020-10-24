const Slug = () => null;

export const getStaticProps = () => {
  return {
    unstable_notFound: true,
  };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default Slug;

