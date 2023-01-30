import { Base } from '.';

import { baseMock } from './mock';

export default {
  title: 'Templates / Base',
  component: Base,
  args: baseMock,
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
