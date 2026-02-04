import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.FC<any>;
}

export interface ServiceItem {
  title: string;
  link: string;
}