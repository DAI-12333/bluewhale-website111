import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 兼容所有浏览器的滚动到顶部方式
    const scrollToTop = () => {
      // 现代浏览器
      if ('scrollTo' in window) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant' as ScrollBehavior
        });
      } else {
        // 旧版浏览器兼容
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
      // 确保所有情况都执行
      if (window.pageYOffset !== undefined) {
        window.scroll(0, 0);
      }
    };
    
    scrollToTop();
  }, [pathname]);

  return null;
}
