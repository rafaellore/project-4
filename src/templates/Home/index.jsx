import P from 'prop-types';
import Head from 'next/head';

import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

import { Base } from '../Base';

function Home({ data }) {
  const { menu, sections, footerHtml, slug, title } = data[0];
  const { links, text, link, srcImg } = menu;

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

Home.propTypes = {
  data: P.array,
};

export default Home;
