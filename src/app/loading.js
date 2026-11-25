export default function Loading() {
  return (
    <div className="route-loader" role="status" aria-live="polite" aria-label="Loading page">
      <div className="site-loader__inner">
        <div className="site-loader__ring" aria-hidden="true">
          <span className="site-loader__arc" />
          <span className="site-loader__monogram">
            Kumar Jitin<b>.</b>
          </span>
        </div>
        <span className="site-loader__title">LOADING</span>
      </div>
    </div>
  );
}
