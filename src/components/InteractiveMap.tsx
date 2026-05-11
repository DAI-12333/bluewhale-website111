import { useState, useRef, useEffect } from 'react';
import { MapPin, ZoomIn, ZoomOut, Move } from 'lucide-react';

interface InteractiveMapProps {
  imageSrc: string;
  address: string;
}

export default function InteractiveMap({ imageSrc, address }: InteractiveMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);
  const [naturalSize, setNaturalSize] = useState({ width: 0, height: 0 });

  const minScale = 0.5;
  const maxScale = 3;

  // 获取图片原始尺寸
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setNaturalSize({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.src = imageSrc;
  }, [imageSrc]);

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.25, maxScale));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.25, minScale));
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      
      // 限制拖动范围
      const container = containerRef.current;
      if (container) {
        const maxX = (container.clientWidth * (scale - 1)) / 2;
        const maxY = (container.clientHeight * (scale - 1)) / 2;
        
        setPosition({
          x: Math.max(-maxX, Math.min(maxX, newX)),
          y: Math.max(-maxY, Math.min(maxY, newY)),
        });
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // 触摸支持
  const handleTouchStart = (e: React.TouchEvent) => {
    if (scale > 1 && e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches.length === 1) {
      const newX = e.touches[0].clientX - dragStart.x;
      const newY = e.touches[0].clientY - dragStart.y;
      
      const container = containerRef.current;
      if (container) {
        const maxX = (container.clientWidth * (scale - 1)) / 2;
        const maxY = (container.clientHeight * (scale - 1)) / 2;
        
        setPosition({
          x: Math.max(-maxX, Math.min(maxX, newX)),
          y: Math.max(-maxY, Math.min(maxY, newY)),
        });
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // 滚轮缩放
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale(prev => Math.max(minScale, Math.min(maxScale, prev + delta)));
  };

  return (
    <div className="glass-card p-4 overflow-hidden">
      <div className="relative">
        {/* 地图容器 */}
        <div
          ref={containerRef}
          className={`relative rounded-lg overflow-hidden bg-dark-700 cursor-${scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'}`}
          style={{
            aspectRatio: naturalSize.width && naturalSize.height 
              ? `${naturalSize.width} / ${naturalSize.height}`
              : '16/9'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
        >
          <img
            src={imageSrc}
            alt="公司位置"
            className={`w-full h-full object-contain transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{
              transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
              transformOrigin: 'center center',
            }}
            onLoad={() => setImageLoaded(true)}
            draggable={false}
          />
          
          {/* 加载占位符 */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-dark-700">
              <div className="animate-pulse text-gray-500">加载中...</div>
            </div>
          )}
        </div>

        {/* 缩放控制按钮 */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button
            onClick={handleZoomIn}
            disabled={scale >= maxScale}
            className="w-10 h-10 bg-dark-900/90 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center text-white hover:bg-dark-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="放大"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <button
            onClick={handleZoomOut}
            disabled={scale <= minScale}
            className="w-10 h-10 bg-dark-900/90 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center text-white hover:bg-dark-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="缩小"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <button
            onClick={handleReset}
            className="w-10 h-10 bg-dark-900/90 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center text-white hover:bg-dark-800 transition-colors"
            title="重置"
          >
            <Move className="w-5 h-5" />
          </button>
        </div>

        {/* 地址标签 */}
        <div className="absolute bottom-3 left-3 bg-dark-900/90 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/10 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-ocean-400 shrink-0" />
          <p className="text-white font-medium text-sm">{address}</p>
        </div>

        {/* 缩放级别指示器 */}
        <div className="absolute bottom-3 right-3 bg-dark-900/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
          <p className="text-white text-xs">
            {Math.round(scale * 100)}%
          </p>
        </div>
      </div>

      {/* 操作提示 */}
      <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
        <p>滚轮缩放 | 拖动平移</p>
        <p>支持触屏双指缩放</p>
      </div>
    </div>
  );
}
