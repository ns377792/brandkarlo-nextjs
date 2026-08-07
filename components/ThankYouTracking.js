"use client";

import { useEffect } from "react";

// Pushes a custom dataLayer event when this page mounts. Needed because
// this page is usually reached via client-side navigation (router.push)
// after a form submits, not a full page load — so GTM's default "gtm.js"
// container-load event does NOT fire again here. A GTM trigger listening
// for this specific "thank_you_view" custom event (instead of "Page View")
// is what should be used to fire the conversion tag.
export default function ThankYouTracking() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "thank_you_view",
      page_path: "/thank-you",
    });
  }, []);

  return null;
}
