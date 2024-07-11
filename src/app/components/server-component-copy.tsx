import React from 'react';

export interface ServerComponentProps {
  children?: React.ReactNode;
}

export default function ServerComponentCopy({children}: ServerComponentProps) {
 return (
   <div>
     <span>Server Component Copy</span>
     {children}
   </div>
 )
}