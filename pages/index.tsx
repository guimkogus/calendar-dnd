import PageTags from './_pageTags';
import Home from '../src/components/Home';
import { wrapper } from '../src/store';

type Props = {
  pageTitle: string;
};

const HomePage = ({ pageTitle }: Props) => {
  const pageUrl = `${process.env.NEXT_PUBLIC_URL}/`;

  return (
    <>
      <PageTags
        pageTitle={pageTitle}
        pageDescription="A beautiful calendar with beautiful drag n' drop"
        pageUrl={pageUrl}
      />
      <Home />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(() => {
  return {
    props: {
      pageTitle: 'Calendar DND'
    }
  };
});

export default HomePage;
