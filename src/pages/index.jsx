import PropTypes from 'prop-types';

import { mapData } from '../api/map-data';

import config from '../config/';

export default function Index({ data }) {
  return <h1>{data}</h1>;
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export const getStaticProps = async () => {
  const raw = await fetch(
    config.url + 'pages?populate=deep&pagination[pageSize]=1&sort[0]=id:desc',
  );

  const json = raw.json();

  const data = mapData(json);

  return {
    props: {
      data,
    },
  };
};
