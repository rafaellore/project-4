import { useEffect, useRef, useState } from 'react';

import { mapData } from '../../api/map-data';

import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

import { Base } from '../Base';
import { PageNotFound } from '../NotFound';
import { Loading } from '../Loading';
import { useLocation } from 'react-router-dom';

import config from '../../config';

function Home() {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(
          'https://strapi-test-mqjh.onrender.com/api/pages?populate=deep&pagination[pageSize]=1&sort[0]=id:desc',
        );
        const json = await data.json();
        const { attributes } = json.data[0];

        console.log(json);
        const pageData = mapData([attributes]);

        setData(() => pageData[0]);
      } catch {
        console.log('deu erro');
        setData(undefined);
      }
    };

    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (data === undefined) {
      document.title = `Página não encontrada | ${config.siteName}`;
    }

    if (data && !data.slug) {
      document.title = `Carregando... | ${config.siteName}`;
    }

    if (data && data.title) {
      document.title = `${data.title} | ${config.siteName}`;
    }
  }, [data]);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections = [], footerHtml = '', slug = '' } = data;
  const { links = [], text = '', link = '', srcImg = '' } = menu;

  console.log();

  if (sections.length > 0)
    return (
      <Base
        links={links}
        footerHtml={footerHtml}
        logoData={{ text, link, srcImg }}
      >
        {sections.map((section = {}, index) => {
          const { component, __component } = section;
          const key = `${slug}-${index}`;

          console.log(section);

          if (
            component === 'section.sections-two-columns' ||
            __component === 'section.sections-two-columns'
          ) {
            return <GridTwoColumns key={key} {...section} />;
          }

          if (component === 'section.section-content') {
            return <GridContent key={key} {...section} />;
          }

          if (component === 'section.section-grid-text') {
            return <GridText key={key} {...section} />;
          }

          if (component === 'section.section-grid-image') {
            return <GridImage key={key} {...section} />;
          }
        })}
      </Base>
    );
}

export default Home;
