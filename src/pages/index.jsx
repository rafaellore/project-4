import PropTypes from 'prop-types';
import { loadPages } from '../api/load-pages';
import Home from '../templates/Home';

export default function Index({ data }) {
  return <Home data={data} />;
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export const getStaticProps = async () => {
  let data = null;

  try {
    data = await loadPages('olha-minha-pagina');
  } catch (e) {
    //
  }

  if (!data || !data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};
