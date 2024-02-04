import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { AppLink } from 'shared/ui/AppLink/AppLink';

import s from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(s.navbar, {}, [className])}>
    <div className={s.links}>
      <AppLink className={s.mainLink} to="/">Главная страница</AppLink>
      <AppLink to="/about">О сайте</AppLink>
    </div>
  </div>
);
