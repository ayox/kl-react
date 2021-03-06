/** @jsx jsx */
import { Styled, jsx } from 'theme-ui';

export const Card = ({ width = 320, ...props }) => (
  <Styled.div
    {...props}
    sx={{
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: width,
      p: 2,
    }}
  />
);
