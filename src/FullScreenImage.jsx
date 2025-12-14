import React, { useState, useRef, useEffect } from 'react';
import './index.css';

export default function FullScreenImage({ src, alt = '', thumbClass = '', modalImgClass = '' }) {
  const [open, setOpen] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpen = (e) => {
    // keep this handler as the user gesture so Fullscreen API call is allowed
    e.preventDefault();
    setOpen(true);

    // Optional: request browser fullscreen for better experience (may be blocked in some contexts)
    if (document.fullscreenEnabled && !document.fullscreenElement) {
      // request fullscreen on the documentElement so background/controls also disappear
      document.documentElement.requestFullscreen?.().catch(() => {
        /* ignore failures (browser block, cross-origin restrictions, etc.) */
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
    if (document.fullscreenElement) {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  return (
    <>
      {/* thumbnail / inline image */}
      <img
        src={src}
        alt={alt}
        className={`fsi-thumb ${thumbClass}`}
        onClick={handleOpen}
        style={{ cursor: 'zoom-in' }}
      />

      {/* modal overlay */}
      {open && (
        <div className="fsi-modal" role="dialog" aria-modal="true" onClick={handleClose}>
          <div className="fsi-modal__dialog" onClick={(e) => e.stopPropagation()}>
            <button className="fsi-close" onClick={handleClose} aria-label="Close full screen">×</button>
            <img
              ref={imgRef}
              src={src}
              alt={alt}
              className={`fsi-full ${modalImgClass}`}
            />
          </div>
        </div>
      )}
    </>
  );
}