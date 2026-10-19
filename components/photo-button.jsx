'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { assetPath } from '../lib/site';

export default function PhotoButton({ filename, alt, caption, width, height, images, className = 'photo-button', priority = false }) {
  const dialogRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const photos = images?.length ? images : [{ filename, alt, width, height }];
  const photo = photos[selectedIndex];
  const hasMultiple = photos.length > 1;
  const currentCaption = photo.caption || caption;

  function changePhoto(direction) {
    setSelectedIndex(index => (index + direction + photos.length) % photos.length);
  }

  const preview = (
    <button type="button" className={className} onClick={() => dialogRef.current.showModal()} aria-label={`Enlarge ${currentCaption.toLowerCase()}${hasMultiple ? `, photo ${selectedIndex + 1} of ${photos.length}` : ''}`}>
      <Image src={assetPath(photo.filename)} alt={photo.alt} width={photo.width} height={photo.height} preload={priority} loading={priority ? undefined : 'lazy'} />
    </button>
  );

  return (
    <>
      {hasMultiple ? (
        <div className="photo-gallery">
          {preview}
          <span className="photo-count" aria-hidden="true">{selectedIndex + 1} / {photos.length}</span>
          <div className="photo-thumbnails" role="group" aria-label={`${caption} photos`}>
            {photos.map((image, index) => (
              <button key={image.filename} className="photo-thumbnail" type="button" aria-label={`Show ${image.caption || caption}, photo ${index + 1} of ${photos.length}`} aria-pressed={index === selectedIndex} onClick={() => setSelectedIndex(index)}>
                <Image src={assetPath(image.filename)} alt="" width={48} height={48} />
              </button>
            ))}
          </div>
        </div>
      ) : preview}
      <dialog
        ref={dialogRef}
        aria-label={caption}
        onClick={event => {
          if (event.target === event.currentTarget) dialogRef.current.close();
        }}
        onKeyDown={event => {
          if (hasMultiple && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) {
            event.preventDefault();
            changePhoto(event.key === 'ArrowLeft' ? -1 : 1);
          }
        }}
      >
        <button className="dialog-close" type="button" aria-label="Close photo" onClick={() => dialogRef.current.close()}>×</button>
        <Image src={assetPath(photo.filename)} alt={photo.alt} width={photo.width} height={photo.height} />
        <div className="photo-dialog-footer">
          {hasMultiple && <button className="photo-step" type="button" aria-label="Previous photo" onClick={() => changePhoto(-1)}>←</button>}
          <p role="status" aria-live="polite">{currentCaption}{hasMultiple && <span className="photo-position">{selectedIndex + 1} of {photos.length}</span>}</p>
          {hasMultiple && <button className="photo-step" type="button" aria-label="Next photo" onClick={() => changePhoto(1)}>→</button>}
        </div>
      </dialog>
    </>
  );
}
