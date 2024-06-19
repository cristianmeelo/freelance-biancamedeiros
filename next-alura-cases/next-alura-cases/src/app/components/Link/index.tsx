import React, { ReactNode } from 'react';
import NextLink from 'next/link';

export const Link = ({ children, href, ...props }: LinkProps) => {
  return (
    <NextLink href={href} passHref>
      <span style={{ color: 'red' }}>{children}</span>
    </NextLink>
  );
};
