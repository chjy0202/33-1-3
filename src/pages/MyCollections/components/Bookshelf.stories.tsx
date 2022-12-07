import { ComponentStory, ComponentMeta } from '@storybook/react';

import Bookshelf from './Bookshelf';

export default {
  title: 'pages/MyCollections/Bookshelf',
  component: Bookshelf,
  argTypes: {
    count: { control: { type: 'number', min: 0, step: 1 } },
    step: { control: { type: 'range', min: 1, max: 10, step: 1 } },
  },
} as ComponentMeta<typeof Bookshelf>;

const Template: ComponentStory<typeof Bookshelf> = (args) => (
  <Bookshelf {...args} />
);

export const Empty = Template.bind({});
Empty.args = {
  count: 0,
  step: 10,
};

export const BelowTen = Template.bind({});
BelowTen.args = {
  count: 10,
  step: 10,
};

export const BelowTwenty = Template.bind({});
BelowTwenty.args = {
  count: 20,
  step: 10,
};

export const BelowThirty = Template.bind({});
BelowThirty.args = {
  count: 30,
};

export const BelowForty = Template.bind({});
BelowForty.args = {
  count: 40,
};

export const AboveForty = Template.bind({});
AboveForty.args = {
  count: 50,
};