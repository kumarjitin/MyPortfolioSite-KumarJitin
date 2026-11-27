export default function AutoScrollGallery({ images = [], altPrefix = "Gallery photo" }) {
  if (!images.length) return null;

  const shouldScroll = images.length > 1;
  const slides = shouldScroll ? [...images, ...images] : images;
  const durationSeconds = Math.max(16, images.length * 4);

  return (
    <div
      className={`auto-gallery${shouldScroll ? " is-animated" : " is-single"}`}
      style={{ "--scroll-duration": `${durationSeconds}s` }}
      aria-label={`${altPrefix} gallery`}
    >
      <div className="auto-gallery__track">
        {slides.map((src, idx) => {
          const isClone = idx >= images.length;
          return (
            <div
              className="auto-gallery__slide"
              key={`${src}-${idx}`}
              aria-hidden={isClone ? "true" : undefined}
            >
              {!shouldScroll && (
                <img className="auto-gallery__blur-bg" src={src} alt="" aria-hidden="true" />
              )}
              <img
                src={src}
                alt={isClone ? "" : `${altPrefix} ${idx + 1}`}
                loading={idx < 3 ? "eager" : "lazy"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
