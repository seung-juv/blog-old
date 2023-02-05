import '#styles/reset.scss';
import '#styles/global.scss';

import React from 'react';
import { headers } from 'next/headers';
import Link from 'next/link';
import Logo from '#components/Logo';
import dayjs from 'dayjs';
import { getSession } from '#libs/session';
import GlobalNavigationBar from './GlobalNavigationBar';
import styles from './layout.module.scss';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default async function MainLayout({ children }: MainLayoutProps) {
  const session = await getSession(headers().get('cookie') as string);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.inner}>
          <h1>
            <Link href="/">
              <Logo width="10rem" />
            </Link>
          </h1>
          <GlobalNavigationBar session={session} />
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy;{dayjs().year()}. <Link href="/">SeungJuBlog</Link> All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
