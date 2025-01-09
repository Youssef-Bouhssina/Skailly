// reportWebVitals.js
// This file measures and reports web vitals, which are metrics related to user experience.
// It uses the 'web-vitals' library to collect these metrics.

const reportWebVitals = (onPerfEntry) => {
  // Check if onPerfEntry is a function before using it.
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import the 'web-vitals' library. This helps reduce the initial bundle size.
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Get Cumulative Layout Shift (CLS)
      getCLS(onPerfEntry);
      // Get First Input Delay (FID)
      getFID(onPerfEntry);
      // Get First Contentful Paint (FCP)
      getFCP(onPerfEntry);
      // Get Largest Contentful Paint (LCP)
      getLCP(onPerfEntry);
      // Get Time to First Byte (TTFB)
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;