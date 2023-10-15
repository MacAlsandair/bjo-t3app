import React from 'react';
import { useRouter } from 'next/router';
import NewsCard from './Newscard';

const NewsSection: React.FC = () => {
  const router = useRouter();
  const isMainPage = router.pathname === '/';

  return (
    <>
      {isMainPage && (
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NewsCard
            title="News 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageUrl="https://via.placeholder.com/300"
          />
          <NewsCard
            title="News 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageUrl="https://via.placeholder.com/300"
          />
          <NewsCard
            title="News 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageUrl="https://via.placeholder.com/300"
          />
        </div>
      )}
    </>
  );
};

export default NewsSection;
