import { StackCardStyleInterpolator } from '@react-navigation/stack';

export const usefadeAnimation: StackCardStyleInterpolator = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
