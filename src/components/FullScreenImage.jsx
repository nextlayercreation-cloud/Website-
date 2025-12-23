import React, { useState, useRef, useEffect } from 'react';
import '../styles/index.css';
import { useAuth } from '../hooks/AuthContext';

export default function FullScreenImage({ src,alt = '', thumbClass = '', modalImgClass = '' }) {
  const { isLogin } = useAuth();
  const [open, setOpen] = useState(false);
  const imgRef = useRef(null);
  const bin=(
	  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><g id="_01_align_center" data-name="01 align center"><path d="M22,4H17V2a2,2,0,0,0-2-2H9A2,2,0,0,0,7,2V4H2V6H4V21a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V6h2ZM9,2h6V4H9Zm9,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V6H18Z"/><rect x="9" y="10" width="2" height="8"/><rect x="13" y="10" width="2" height="8"/></g>	</svg>
  );
  const cross=(
    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M16,8a1,1,0,0,0-1.414,0L12,10.586,9.414,8A1,1,0,0,0,8,9.414L10.586,12,8,14.586A1,1,0,0,0,9.414,16L12,13.414,14.586,16A1,1,0,0,0,16,14.586L13.414,12,16,9.414A1,1,0,0,0,16,8Z"/><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"/></svg>
  );
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
      {open && (<>
        <div className="fsi-modal" role="dialog" aria-modal="true" onClick={handleClose}>
          <div className="fsi-modal__dialog" onClick={(e) => e.stopPropagation()}>
            <button title='Close Image' className="fsi-close btn-primary" onClick={handleClose} aria-label="Close full screen">{cross}</button>
            {isLogin && (<button className="fsi-delete btn btn-primary" aria-label='Delete Image'>{bin}</button>)}
            <img
              ref={imgRef}
              src={src}
              alt={alt}
              className={`fsi-full ${modalImgClass}`}
            />
          </div>
        </div>
        </>
      )}
    </>
  );
}