import React from 'react';
import MagicButton from '@/app/components/magic-button';
import Header from '@/app/components/header';

export interface PageProps {
}

export default function Page({}:PageProps) {
  return (
    <>
      <Header>Dashboard / New Companies</Header>
      <div>Some additional info</div>
    </>
  )
}