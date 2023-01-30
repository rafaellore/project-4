import { Heading } from '.';

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
};

export const Light = (args) => <Heading {...args} />;

export const Dark = (args) => <Heading {...args} />;

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
