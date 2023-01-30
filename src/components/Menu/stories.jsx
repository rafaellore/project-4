import { Menu } from '.';
import { mock } from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: mock,
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImg: '',
    },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '300vh', background: 'gray' }}>
      <Menu {...args} />
    </div>
  );
};
