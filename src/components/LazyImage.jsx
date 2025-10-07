import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

/**
 * Optimized lazy-loading image component
 * Features:
 * - Lazy loading (loads only when visible)
 * - Blur effect while loading
 * - Proper alt text for accessibility
 * - Responsive sizing
 */
export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  effect = 'blur',
  threshold = 100,
  ...props 
}) {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      effect={effect}
      threshold={threshold}
      width={width}
      height={height}
      className={className}
      wrapperClassName={className}
      {...props}
    />
  );
}
