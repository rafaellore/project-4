import { Meta, Story } from '@storybook/react/types-6-0';
import { Heading, HeadingProps } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Um texto simples',
    colorDark: false,
    size: 'small',
  },

  argTypes: {
    children: { type: 'string' },
    colorDark: { type: 'boolean' },
  },

  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Light: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Dark: Story<HeadingProps> = (args) => <Heading {...args} />;

Light.parameters = {
  children: 'O texto está escuro',
  backgrounds: {
    default: 'light',
  },
  colorDark: true,
};

Dark.parameters = {
  children: 'O texto está claro',
  colorDark: false,
};
