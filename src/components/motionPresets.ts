// 全站共享入场动画预设：仅淡入、不带任何位移，避免页面打开时内容出现上移
export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.4 },
};

// 页面挂载即播放的淡入（各页 Hero 区）
export const fadeInOnMount = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};
