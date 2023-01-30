import { NavLinks } from '.';
import { mock } from './mock';

export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    links: mock,
  },
};

export const Template = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  );
};
