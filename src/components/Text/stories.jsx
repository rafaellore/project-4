import { Text } from '.';

export default {
  title: 'Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quisquam officiis est, eligendi tempora quas natus quam temporibus dolorem nemo id, perspiciatis autem hic nam asperiores magni. Repudiandae, maiores labore.',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Text {...args} />
    </div>
  );
};
