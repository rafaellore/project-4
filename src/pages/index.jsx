import PropTypes from 'prop-types';
import { mapData } from '../api/map-data';
import Home from '../templates/Home';

export default function Index({ data }) {
  console.log(data);

  return <Home data={data} />;
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export const getStaticProps = async () => {
  const raw = await await fetch(
    `https://strapi-test-mqjh.onrender.com/api/pages?populate=deep&pagination[pageSize]=1&sort[0]=id:desc`,
  );
  const json = await raw.json();
  const { attributes } = json.data[0];

  console.log(json);
  const data = mapData([attributes]);

  console.log(data);

  return {
    props: {
      data,
    },
  };
};
