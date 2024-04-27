import React, { ReactNode } from 'react';

interface IProp {
  title: string;
  subTitle?: string;
  titleClassName?: string;
  subTitleClassName?: string;
  className?: string;
  bgColor?: string;
  children?: ReactNode;
}
const HeroContainer: React.FC<IProp> = ({
  title,
  subTitle,
  titleClassName = '',
  subTitleClassName = '',
  className = '',
  bgColor = 'bg-at-primary-50',
  children,
}: IProp) => {
  return (
    <div className={`rounded-xl  ${bgColor} ${className} `}>
      <h1 className={`text-at-5xl font-bold lg:text-at-7xl font-Golos break-words ${titleClassName}`}>{title}</h1>
      {subTitle && (
        <p className={`text-sm font-normal font-DmSans md:text-base mt-4 ${subTitleClassName}`}>{subTitle}</p>
      )}
      {children && children}
    </div>
  );
};

export default HeroContainer;
