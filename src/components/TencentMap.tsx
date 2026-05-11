import { useEffect, useRef, useState, useCallback } from 'react';
import { ZoomIn, ZoomOut, Locate, MapPin } from 'lucide-react';

// 您的腾讯地图 Key
const TENCENT_MAP_KEY = 'R6GBZ-4VDKH-AMAD3-W7EFY-UTKFJ-BBFTQ';

// 全局状态：地图 SDK 是否已加载
let _isMapSDKLoaded: boolean;
let loadMapSDKPromise: Promise<void> | null = null;
let loadMapSDKPromise: Promise<void> | null = null;

interface TencentMapProps {
  address: string;
  center?: { lat: number; lng: number };
  zoom?: number;
}

export default function TencentMap({ 
  address, 
  center = { lat: 31.485502, lng: 120.374540 },
  zoom = 17 
}: TencentMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);

  // 加载腾讯地图 SDK（只加载一次）
  const loadMapSDK = useCallback(() => {
    if (loadMapSDKPromise) return loadMapSDKPromise;

    loadMapSDKPromise = new Promise<void>((resolve, reject) => {
      if ((window as any).TMap) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://map.qq.com/api/gljs?v=1.exp&key=${TENCENT_MAP_KEY}`;
      script.async = true;
      script.onload = () => {
        _isMapSDKLoaded = true;
        resolve();
      };
      script.onerror = () => {
        reject(new Error('地图SDK加载失败'));
      };
      document.head.appendChild(script);
    });

    return loadMapSDKPromise;
  }, []);

  // 初始化地图
  useEffect(() => {
    let cancelled = false;

    const initMap = async () => {
      if (mapInstanceRef.current || !mapRef.current) return;

      try {
        await loadMapSDK();
        
        if (cancelled || !mapRef.current) return;

        const map = new (window as any).TMap.Map(mapRef.current, {
          center: new (window as any).TMap.LatLng(center.lat, center.lng),
          zoom: zoom,
          mapStyleId: 'style1',
          zoomControl: false,
          draggable: true,
          scrollwheel: true,
        });

        if (cancelled) {
          map.destroy();
          return;
        }

        // 添加标记
        new (window as any).TMap.MultiMarker({
          id: 'marker-layer',
          map: map,
          styles: {
            marker: new (window as any).TMap.MarkerStyle({
              width: 30,
              height: 40,
              anchor: { x: 15, y: 40 },
              src: 'https://mapapi.qq.com/web/mapCenter/img/markerRed.png',
            }),
          },
          geometries: [
            {
              id: 'marker1',
              styleId: 'marker',
              position: new (window as any).TMap.LatLng(center.lat, center.lng),
            },
          ],
        });

        // 添加信息窗口
        new (window as any).TMap.InfoWindow({
          map: map,
          position: new (window as any).TMap.LatLng(center.lat, center.lng),
          content: `<div style="padding:12px;color:#1a1a1a;font-size:14px;line-height:1.6;background:#fff;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15);">
            <strong style="font-size:15px;color:#0891b2;">蓝鲸动力科技有限公司</strong><br/>
            <span style="color:#666;">无锡市新吴区清晏路32号</span>
          </div>`,
          offset: { x: 0, y: -45 },
          visible: true,
        });

        mapInstanceRef.current = map;
        setIsLoaded(true);
      } catch (error) {
        if (!cancelled) {
          console.error('地图初始化失败:', error);
          setMapError(true);
        }
      }
    };

    initMap();

    return () => {
      cancelled = true;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
        mapInstanceRef.current = null;
      }
    };
  }, [loadMapSDK, center.lat, center.lng, zoom]);

  const handleZoomIn = useCallback(() => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setZoom(mapInstanceRef.current.getZoom() + 1);
    }
  }, []);

  const handleZoomOut = useCallback(() => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setZoom(Math.max(3, mapInstanceRef.current.getZoom() - 1));
    }
  }, []);

  const handleRecenter = useCallback(() => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setCenter(
        new (window as any).TMap.LatLng(center.lat, center.lng)
      );
    }
  }, [center.lat, center.lng]);

  if (mapError) {
    return (
      <div className="glass-card p-4 overflow-hidden">
        <div className="relative rounded-lg overflow-hidden bg-dark-700 aspect-[3/2] flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-ocean-500/30 mx-auto mb-3" />
            <p className="text-gray-400 font-medium">{address}</p>
            <p className="text-sm text-gray-500 mt-2">地图加载失败</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card p-4 overflow-hidden">
      <style>{`
        .tmap-btn-zoom, .tmap-pan-container, .tmap-search, .tmap-toolbar, .tmap-contextmenu {
          display: none !important;
        }
      `}</style>
      <div className="relative">
        <div
          ref={mapRef}
          className="relative rounded-lg overflow-hidden bg-dark-700"
          style={{ aspectRatio: '3/2', height: 'auto' }}
        >
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-dark-700 z-10">
              <div className="text-center">
                <div className="w-10 h-10 border-2 border-ocean-500/30 border-t-ocean-500 rounded-full animate-spin mx-auto mb-3" />
                <p className="text-gray-500">地图加载中...</p>
              </div>
            </div>
          )}
        </div>

        <div className="absolute top-3 right-3 flex flex-col gap-2 z-20">
          <button
            onClick={handleZoomIn}
            disabled={!isLoaded}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-dark-900 hover:bg-white transition-colors disabled:opacity-50 shadow-lg"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <button
            onClick={handleZoomOut}
            disabled={!isLoaded}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-dark-900 hover:bg-white transition-colors disabled:opacity-50 shadow-lg"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <button
            onClick={handleRecenter}
            disabled={!isLoaded}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-dark-900 hover:bg-white transition-colors disabled:opacity-50 shadow-lg"
          >
            <Locate className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="mt-3 text-xs text-gray-500">
        <p>支持鼠标滚轮缩放、拖拽平移</p>
      </div>
    </div>
  );
}
