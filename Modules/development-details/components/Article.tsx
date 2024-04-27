import React from 'react';
import ArrowAccordion from '@/Shared/Components/ArrowAccordion/ArrowAccordion';

interface IProp {
  articles: string;
}

const Article = ({ articles }: IProp) => {
  return (
    <section className='mt-6 ld:mt-8 border-b pb-8 relative'>
      <ArrowAccordion
        defaultHeight='200'
        closeBtnName='Read more'
        openBtnName='Read less'
        conditionalBtnClassName='before:content-[""] before:block before:h-25 before:w-full before:absolute before:bottom-16 before:left-0 before:bg-white-shade'
      >
        <article
          className='development-detail-container text-base font-normal'
          dangerouslySetInnerHTML={{ __html: articles }}
        ></article>
      </ArrowAccordion>
    </section>
  );
};

export default Article;
