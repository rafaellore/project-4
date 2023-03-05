import { loadPages } from '../api/load-pages';
import Home from '../templates/Home';
import { GetStaticProps } from 'next';

export type IndexProps = {
  data: [];
};

export default function Index({ data = null }: IndexProps) {
  return <Home data={data} />;
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
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
