import { ReactNode } from 'react';
import TrendingTagsList from '@/components/common/trending-tags-list';
import { ToastContainer } from 'react-toastify';

import Header from '../header/header';
import BackButton from '../common/back-button';
import SuggestionList from '../community/suggestion-list';

interface LayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => (
  <div>
    <Header />
    <div className="min-h-screen grid grid-cols-1 max-w-[1000px] lg:grid-cols-[1fr_300px] mx-auto gap-x-5 mt-0 lg:mt-5 ">
      <main className=" w-full max-w-[680px] mx-auto">
        <BackButton />
        {children}
      </main>
      <div className="sticky h-fit top-[92px] space-y-5 lg:block hidden">
        <TrendingTagsList />
        {/* <PopularCommunitiesList /> */}
        <SuggestionList />
      </div>
    </div>
    <ToastContainer autoClose={3000} position="bottom-right" />
  </div>
);

export default MainLayout;
