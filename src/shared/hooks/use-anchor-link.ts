import { useRouter } from 'next/router';
import { scroller } from 'react-scroll';

export const useAnchorLink = () => {
  const router = useRouter();
  const handleAnchorLink = async (path: string) => {
    if (router.pathname !== '/') {
      await router.push('/');
      setTimeout(() => {
        scroller.scrollTo(path, { smooth: true, offset: -50 });
      }, 3000);
    } else {
      scroller.scrollTo(path, { smooth: true, offset: -50 });
    }
  };
  return { handleAnchorLink };
};
