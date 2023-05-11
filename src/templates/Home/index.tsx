import {
  GridTwoColumns,
  GridTwoColumnsProps,
} from '../../components/GridTwoColumns';
import { GridContent, GridContentProps } from '../../components/GridContent';
import { GridText, GridTextProps } from '../../components/GridText';
import { GridImage, GridImageProps } from '../../components/GridImage';

import { Base } from '../Base';
import { LogoLinkProps } from '../../components/LogoLink';
import { MenuLinkProps } from '../../components/MenuLink';

export type PageData = {
  title: string;
  slug: string;
  footerHtml: string;
  menu: LogoLinkProps & { links: MenuLinkProps[] };
  sections: SectionProps[];
};

export type SectionProps = (
  | GridImageProps
  | GridTextProps
  | GridTwoColumnsProps
  | GridContentProps
) & {
  component: string;
  __component: string;
  metadata: { section_id: string };
};

export type HomeProps = {
  data: PageData[];
};

function Home({ data }: HomeProps) {
  const { menu, sections, footerHtml, slug } = data[0];
  const { links, text, link, srcImg } = menu;

  if (sections.length > 0)
    return (
      <Base
        links={links}
        footerHtml={footerHtml}
        logoData={{ text, link, srcImg }}
      >
        {sections.map((section, index) => {
          const { component, __component, sectionId } = section;
          const key = `${slug}-${index}`;

          if (
            component === 'section.sections-two-columns' ||
            __component === 'section.sections-two-columns'
          ) {
            return (
              <GridTwoColumns
                key={key}
                sectionId={section.metadata.section_id}
                {...(section as GridTwoColumnsProps)}
              />
            );
          }

          if (component === 'section.section-content') {
            return (
              <GridContent
                key={key}
                sectionId={sectionId}
                {...(section as GridContentProps)}
              />
            );
          }

          if (component === 'section.section-grid-text') {
            return (
              <GridText
                key={key}
                sectionId={sectionId}
                {...(section as GridTextProps)}
              />
            );
          }

          if (component === 'section.section-grid-image') {
            return (
              <GridImage
                key={key}
                sectionId={sectionId}
                {...(section as GridImageProps)}
              />
            );
          }
        })}
      </Base>
    );
}

export default Home;
