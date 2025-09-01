import type { ReactNode } from 'react';

interface ILinkProps {
  children: ReactNode;
  onClick: () => void;
}

export const Link = ({ children, onClick }: ILinkProps) => {
  return (
    <span className="link" onClick={onClick}>
      {children}
    </span>
  );
};
