import { useUser } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import React, { ReactElement } from 'react';

import { Content } from '~components/admin/content';
import { Navbar } from '~components/admin/navbar';

type Props = {
  children: ReactElement;
  title: string;
};

export const Layout: React.FC<Props> = ({ children, title }) => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="robots" content="nofollow, noindex" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>

      <Navbar user={user} />

      <Content user={user}>{children}</Content>
    </>
  );
};
