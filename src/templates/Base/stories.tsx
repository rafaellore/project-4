import { Meta, Story } from '@storybook/react/types-6-0';
import { Base, BaseProps } from '.';
import { baseMock } from './mock';

export default {
  title: 'Templates/Base',
  component: Base,
  args: baseMock,
} as Meta;

export const Template: Story<BaseProps> = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
