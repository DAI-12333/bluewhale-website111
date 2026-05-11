# 蓝鲸动力官网 - 代码架构文档

> 文档版本：1.0.0  
> 最后更新：2026-05-06  
> 项目名称：bluewhale-website  
> 项目描述：无锡蓝鲸动力科技有限公司官方网站

---

## 1. 项目概述

### 1.1 项目背景

蓝鲸动力官网是无锡蓝鲸动力科技有限公司的官方网站，用于展示公司形象、产品信息、技术实力和新闻动态。公司专注于移动装备无线供电系统的研发与制造，产品涵盖陆上无线充电桩、海下无线充电桩和移动式充电机器人三大系列。

### 1.2 项目类型

- **类型**：企业展示型官网（单页应用 / SPA）
- **技术架构**：React + TypeScript + Vite
- **部署平台**：Vercel
- **目标用户**：潜在客户、合作伙伴、行业专家、投资者

### 1.3 核心业务

- 产品展示与介绍
- 技术实力展示
- 应用案例分享
- 新闻动态发布
- 在线咨询与联系

---

## 2. 技术栈详解

### 2.1 核心框架

| 技术 | 版本 | 说明 |
|------|------|------|
| **React** | ^18.2.0 | UI 框架，采用函数式组件 + Hooks 模式 |
| **TypeScript** | ^5.2.2 | 类型安全，增强代码可维护性 |
| **Vite** | ^5.1.4 | 现代化构建工具，快速热更新 |

### 2.2 路由与导航

| 技术 | 版本 | 说明 |
|------|------|------|
| **react-router-dom** | ^6.22.0 | 客户端路由管理，支持声明式路由配置 |

### 2.3 UI 与样式

| 技术 | 版本 | 说明 |
|------|------|------|
| **Tailwind CSS** | ^3.4.1 | 原子化 CSS 框架，快速构建响应式界面 |
| **PostCSS** | ^8.4.35 | CSS 转换工具 |
| **Autoprefixer** | ^10.4.18 | 自动添加浏览器前缀 |

### 2.4 动画与图标

| 技术 | 版本 | 说明 |
|------|------|------|
| **framer-motion** | ^11.0.0 | 声明式动画库，支持复杂交互动效 |
| **lucide-react** | ^0.344.0 | 轻量级图标库（基于 Lucide Icons） |

### 2.5 代码质量

| 技术 | 版本 | 说明 |
|------|------|------|
| **ESLint** | ^9.0.0 | 代码静态检查 |
| **@typescript-eslint** | ^8.0.0 | TypeScript 代码检查 |

---

## 3. 目录结构

```
bluewhale-website/
├── public/                     # 静态资源目录
│   └── favicon.svg             # 网站 favicon
│
├── src/                        # 源代码目录
│   ├── components/             # 可复用组件
│   │   ├── Footer.tsx         # 页脚组件
│   │   ├── Navbar.tsx          # 导航栏组件
│   │   ├── PageTransition.tsx  # 页面过渡动画组件
│   │   └── ScrollToTop.tsx     # 滚动置顶组件
│   │
│   ├── pages/                  # 页面组件
│   │   ├── Home.tsx           # 首页
│   │   ├── About.tsx          # 关于我们
│   │   ├── Technology.tsx      # 核心技术
│   │   ├── Products.tsx        # 产品中心
│   │   ├── Applications.tsx    # 应用场景
│   │   ├── News.tsx           # 新闻动态
│   │   └── Contact.tsx         # 联系我们
│   │
│   ├── App.tsx                # 应用根组件（路由配置）
│   ├── main.tsx               # 应用入口文件
│   ├── index.css              # 全局样式（Tailwind 入口）
│   └── vite-env.d.ts          # Vite 类型声明
│
├── dist/                       # 构建输出目录（部署用）
│
├── index.html                  # HTML 模板
│
├── package.json                # 项目配置与依赖
├── package-lock.json           # 依赖锁定文件
│
├── tsconfig.json               # TypeScript 配置
├── tsconfig.node.json          # Node 环境 TypeScript 配置
│
├── vite.config.ts             # Vite 构建配置
├── tailwind.config.js         # Tailwind CSS 配置
├── postcss.config.js          # PostCSS 配置
│
├── eslint.config.js            # ESLint 配置
│
├── vercel.json                # Vercel 部署配置
│
└── ARCHITECTURE.md            # 本架构文档
```

---

## 4. 模块职责详解

### 4.1 入口模块

#### `main.tsx` - 应用入口

**职责**：
- 创建 React 根节点
- 配置 BrowserRouter（路由）
- 挂载全局样式

**核心代码**：
```tsx
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

#### `App.tsx` - 根组件

**职责**：
- 定义路由表
- 组织页面布局结构
- 渲染全局组件（Navbar、Footer、ScrollToTop）

**路由配置**：
| 路径 | 组件 | 说明 |
|------|------|------|
| `/` | Home | 首页 |
| `/about` | About | 关于我们 |
| `/technology` | Technology | 核心技术 |
| `/products` | Products | 产品中心 |
| `/applications` | Applications | 应用场景 |
| `/news` | News | 新闻动态 |
| `/contact` | Contact | 联系我们 |

---

### 4.2 全局组件

#### `Navbar.tsx` - 导航栏

**功能特性**：
- 响应式导航菜单（桌面/移动端）
- 滚动时背景变化效果
- 下拉菜单（产品分类、应用场景）
- 路由高亮显示
- 移动端侧边栏菜单

**状态管理**：
```typescript
const [isScrolled, setIsScrolled] = useState(false)       // 滚动状态
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)  // 移动端菜单
const [activeDropdown, setActiveDropdown] = useState<string | null>(null)  // 下拉菜单
```

**导航项配置**：
```typescript
const navItems = [
  { label: '首页', path: '/' },
  { label: '关于我们', path: '/about' },
  { label: '核心技术', path: '/technology' },
  { label: '产品中心', path: '/products', children: [...] },
  { label: '应用场景', path: '/applications', children: [...] },
  { label: '新闻动态', path: '/news' },
  { label: '联系我们', path: '/contact' },
]
```

#### `Footer.tsx` - 页脚

**功能特性**：
- 公司信息展示
- 链接分组（产品、应用场景、公司）
- 联系方式
- 版权信息与法律链接

#### `PageTransition.tsx` - 页面过渡

**功能特性**：
- 使用 framer-motion 实现入场动画
- 统一页面切换效果

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.4, ease: 'easeOut' }}
>
  {children}
</motion.div>
```

#### `ScrollToTop.tsx` - 滚动置顶

**功能特性**：
- 监听路由变化
- 自动滚动到页面顶部
- 平滑滚动效果

---

### 4.3 页面组件

#### `Home.tsx` - 首页

**页面结构**：
1. **Hero Section** - 主视觉区域
   - 公司 slogan
   - 核心数据展示（15kW、6+专利、3项奖项、24/7服务）
   - CTA 按钮

2. **核心优势** - 6 大核心优势展示
   - 高功率电能变换
   - 强兼容抗偏移
   - 环境自适应
   - 实时状态监测
   - 一体式设计
   - 全场景覆盖

3. **产品中心** - 3 大产品系列预览
   - 陆上无线充电桩
   - 海下无线充电桩
   - 移动式充电机器人

4. **应用场景** - 3 大应用领域
   - 交通运输
   - 海洋工程
   - 工业与民生

5. **新闻动态** - 最新 3 条新闻

6. **CTA Section** - 行动号召

**动画配置**：
```typescript
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 }
}
```

#### `About.tsx` - 关于我们

**页面结构**：
1. **Hero** - 页面标题
2. **企业简介** - 公司介绍 + 数据卡片
3. **企业愿景与使命** - 双卡片布局
4. **发展历程** - 时间轴展示
5. **核心业务** - 3 大业务方向
6. **战略布局** - 海洋工程 + 低空经济

#### `Technology.tsx` - 核心技术

**页面结构**：
1. **技术体系** - 3 大核心技术详情
   - 高功率电能变换技术
   - 强兼容抗偏移无线供电技术
   - 环境自适应技术

2. **核心专利** - 6 项专利展示

3. **荣誉奖项** - 3 项奖项展示

4. **技术优势对比** - 技术方案对比表格

#### `Products.tsx` - 产品中心

**功能特性**：
- 分类筛选（全部/陆上/海下/移动式）
- 产品卡片网格展示
- 产品详情弹窗（Modal）

**数据结构**：
```typescript
interface Product {
  id: string
  name: string
  category: string
  power: string
  description: string
  features: string[]
  specs: Record<string, string>
  applications: string[]
}
```

**产品列表**：
| 类别 | 产品 | 功率 |
|------|------|------|
| 陆上 | LW-500 | 500W |
| 陆上 | LW-2000 | 2kW |
| 陆上 | LW-5000 | 5kW |
| 海下 | SW-1000 | 1kW |
| 海下 | SW-5000 | 5kW |
| 海下 | SW-10000 | 10kW |
| 移动式 | MR-2000 | 2kW |
| 移动式 | MR-5000 | 5kW |
| 移动式 | MR-15000 | 15kW |

#### `Applications.tsx` - 应用场景

**功能特性**：
- 领域筛选（全部/交通运输/海洋工程/工业民生）
- 案例卡片展示
- 案例详情弹窗（包含痛点/解决方案/效果）

**案例数据**：
- 智慧物流园区 AGV 无线充电系统
- 无人机物流配送充电网络
- 海上光伏巡检机器人无线充电系统
- 水下观测网 AUV 能源补给站
- 电力系统巡检无人机充电网络
- 智能变电站巡检机器人充电系统

#### `News.tsx` - 新闻动态

**功能特性**：
- 分类筛选（公司新闻/项目动态/行业资讯/产品发布/技术动态）
- 新闻卡片展示
- 新闻详情弹窗

**数据结构**：
```typescript
interface NewsItem {
  id: string
  title: string
  date: string
  category: string
  summary: string
  content: string
  tags: string[]
}
```

#### `Contact.tsx` - 联系我们

**页面结构**：
1. **联系方式** - 地址、电话、邮箱、工作时间
2. **在线咨询表单** - 姓名、公司、邮箱、电话、咨询类型、留言
3. **常见问题（FAQ）** - 5 个常见问题解答

**表单状态**：
```typescript
const [formData, setFormData] = useState({
  name: '',
  company: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})
const [isSubmitted, setIsSubmitted] = useState(false)
```

---

## 5. 样式系统

### 5.1 Tailwind CSS 配置

**自定义颜色**：

```javascript
// 主色调 - 蓝色系
colors: {
  primary: {
    50: '#e6f0ff', ... 900: '#001433'
  }
}

// 海洋色系
colors: {
  ocean: {
    50: '#e6f7fb', ... 900: '#00232b'
  }
}

// 深色主题
colors: {
  dark: {
    900: '#0a1628',
    800: '#0f1d32',
    700: '#162544',
    600: '#1e3055',
  }
}
```

### 5.2 自定义组件类

```css
@layer components {
  /* 区块容器 */
  .section-container { /* 响应式内边距 */ }
  
  /* 区块内边距 */
  .section-padding { /* 垂直内边距 */ }
  
  /* 渐变文字 */
  .gradient-text { /* 蓝紫渐变 */ }
  
  /* 玻璃态卡片 */
  .glass-card { /* 半透明背景 + 边框 */ }
  
  /* 悬停上浮效果 */
  .hover-lift { /* transform + shadow */ }
  
  /* 主要按钮 */
  .btn-primary { /* 渐变背景 + 悬停效果 */ }
  
  /* 轮廓按钮 */
  .btn-outline { /* 边框 + 悬停填充 */ }
}
```

### 5.3 全局样式

```css
@layer base {
  /* 基础字体 */
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
  }
  
  body {
    font-family: 'Noto Sans SC', 'Inter', system-ui, sans-serif;
    background-color: #0a1628;
    color: #e2e8f0;
  }
  
  /* 选中文本样式 */
  ::selection {
    background-color: rgba(0, 175, 215, 0.3);
    color: #ffffff;
  }
}
```

---

## 6. 数据流向

### 6.1 组件间数据流

```
App.tsx (根组件)
    │
    ├── ScrollToTop (监听路由变化)
    ├── Navbar (接收路由信息，高亮当前页面)
    │
    ├── Routes (路由匹配)
    │   ├── / → Home
    │   ├── /about → About
    │   ├── /technology → Technology
    │   ├── /products → Products
    │   │   └── useSearchParams (URL 参数过滤)
    │   ├── /applications → Applications
    │   │   └── useSearchParams (URL 参数过滤)
    │   ├── /news → News
    │   └── /contact → Contact
    │       └── useState (表单状态管理)
    │
    └── Footer (纯展示组件)
```

### 6.2 状态管理方案

本项目采用 **React Hooks** 进行状态管理，无需引入 Redux 等状态管理库：

| 状态类型 | 实现方式 | 使用场景 |
|----------|----------|----------|
| 组件状态 | `useState` | 表单数据、弹窗状态、筛选条件 |
| 副作用 | `useEffect` | 滚动监听、路由变化处理 |
| 路由参数 | `useSearchParams` | 产品/案例分类筛选 |
| 动画状态 | framer-motion | 页面过渡、元素动画 |

### 6.3 URL 参数流

**产品筛选**：
```
URL: /products?category=land
        │
        └── useSearchParams() → activeCategory = 'land'
                                    │
                                    └── filteredProducts = products.filter(p => p.category === 'land')
```

**案例筛选**：
```
URL: /applications?field=ocean
        │
        └── useSearchParams() → activeField = 'ocean'
                                    │
                                    └── filteredCases = caseStudies.filter(c => c.field === 'ocean')
```

---

## 7. 构建与部署

### 7.1 开发环境

```bash
# 安装依赖
npm install

# 启动开发服务器（热重载）
npm run dev

# 代码检查
npm run lint
```

### 7.2 生产构建

```bash
# TypeScript 类型检查 + Vite 构建
npm run build

# 预览构建结果
npm run preview
```

### 7.3 Vite 配置

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  // 路径别名
    },
  },
  build: {
    outDir: 'dist',        // 输出目录
    sourcemap: true,       // 生成 sourcemap
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],  // 第三方库分包
          animation: ['framer-motion'],                        // 动画库分包
        },
      },
    },
  },
})
```

### 7.4 Vercel 部署配置

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

---

## 8. 关键设计模式

### 8.1 组件设计

**函数式组件 + Hooks**：
```tsx
// 示例：带本地状态的函数式组件
export default function Component() {
  const [state, setState] = useState(initialValue)
  
  useEffect(() => {
    // 副作用处理
    return () => {} // 清理函数
  }, [dependencies])
  
  return <div>{/* JSX */}</div>
}
```

### 8.2 复用模式

**数据驱动渲染**：
```tsx
// 使用数据数组 + map 渲染
const items = [
  { icon: Zap, title: '优势1', desc: '描述1' },
  { icon: Shield, title: '优势2', desc: '描述2' },
]

{items.map((item, index) => (
  <div key={index}>
    <item.icon />
    <h3>{item.title}</h3>
    <p>{item.desc}</p>
  </div>
))}
```

**统一动画配置**：
```tsx
// 抽离动画配置，便于复用
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 }
}

// 使用
<motion.div {...fadeInUp} />
```

### 8.3 条件渲染模式

**Modal 弹窗**：
```tsx
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
```

---

## 9. 性能优化

### 9.1 代码分割

通过 Vite 的 `manualChunks` 配置实现代码分割：

| Chunk | 包含模块 | 目的 |
|--------|----------|------|
| vendor | react, react-dom, react-router-dom | 第三方库长期缓存 |
| animation | framer-motion | 动画库独立加载 |

### 9.2 路由懒加载

当前实现为静态导入，可根据需要改为懒加载：

```tsx
// 懒加载方式（可选优化）
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))

// 需要配合 Suspense 使用
<Suspense fallback={<Loading />}>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</Suspense>
```

### 9.3 动画优化

- 使用 `viewport: { once: true }` 确保元素只动画一次
- 合理设置动画延迟，避免同时触发过多动画
- 使用 `AnimatePresence mode="popLayout"` 优化列表动画

---

## 10. SEO 与可访问性

### 10.1 Meta 信息

```html
<meta name="description" content="无锡蓝鲸动力科技有限公司 - 移动装备无线供电系统专业提供商..." />
<meta name="keywords" content="无线供电,无线充电,水下机器人,无人机..." />
<title>无锡蓝鲸动力科技有限公司 - 移动装备无线供电系统专家</title>
```

### 10.2 字体优化

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

### 10.3 响应式设计

- 移动端优先的断点设计
- 灵活使用 Tailwind 响应式前缀（sm/md/lg/xl/2xl）
- 触摸友好的交互元素尺寸

---

## 11. 开发规范

### 11.1 命名规范

| 类型 | 规范 | 示例 |
|------|------|------|
| 组件文件 | PascalCase.tsx | `Navbar.tsx` |
| 工具文件 | camelCase.ts | `useAuth.ts` |
| 样式类 | kebab-case | `glass-card`, `section-container` |
| 常量 | UPPER_SNAKE_CASE | `MAX_POWER`, `API_URL` |

### 11.2 组件结构

```tsx
// 1. 导入
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// 2. 类型定义
interface Props {
  title: string
}

// 3. 常量定义
const ITEMS = [...]

// 4. 组件定义
export default function Component({ title }: Props) {
  // Hooks
  const [state, setState] = useState()
  
  // 副作用
  useEffect(() => {}, [])
  
  // 事件处理
  const handleClick = () => {}
  
  // 渲染
  return (
    <div>
      {/* JSX */}
    </div>
  )
}
```

### 11.3 代码检查

项目配置了 ESLint 和 TypeScript 严格模式：

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

---

## 12. 扩展指南

### 12.1 添加新页面

1. 在 `src/pages/` 创建页面组件
2. 在 `App.tsx` 添加路由
3. 在 `Navbar.tsx` 添加导航项（可选）

### 12.2 添加新产品分类

1. 在 `Products.tsx` 的 `categories` 数组添加分类
2. 在 `products` 数组添加产品数据
3. 更新 Footer 的产品链接

### 12.3 添加新新闻分类

1. 在 `News.tsx` 的 `categories` 数组添加分类
2. 在 `newsItems` 数组添加新闻数据

### 12.4 接入后端 API

当前为静态数据展示，如需接入后端：

1. 创建 API 服务层（如 `src/services/api.ts`）
2. 使用 `fetch` 或 `axios` 请求数据
3. 添加加载状态和错误处理
4. 考虑使用 React Query 进行数据缓存

---

## 13. 常见问题

### Q1: 如何修改品牌颜色？
在 `tailwind.config.js` 中修改 `primary`、`ocean` 颜色配置。

### Q2: 如何添加新图标？
使用 `lucide-react` 库：
```tsx
import { IconName } from 'lucide-react'
<IconName className="w-6 h-6" />
```

### Q3: 如何部署到其他平台？
Vercel 配置可直接迁移到 Netlify、Cloudflare Pages 等平台，只需修改构建命令。

### Q4: 如何添加国际支持（i18n）？
推荐使用 `react-i18next` 库，将文本内容抽取到语言文件中。

---

## 14. 版本记录

| 版本 | 日期 | 修改内容 |
|------|------|----------|
| 1.0.0 | 2026-05-06 | 初始版本，完成基础架构文档 |

---

> 文档由 AI 辅助生成，如有问题请联系开发团队。
