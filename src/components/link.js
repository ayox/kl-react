import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Styled } from 'theme-ui';

export const Link = ({ to, isExternal, ...props }) => {
  return isExternal ? (
    <Styled.a href={to} target="_BLANK" rel="noopener noreferrer" {...props} />
  ) : (
    <Styled.a as={GatsbyLink} to={to} {...props} />
  );
};
