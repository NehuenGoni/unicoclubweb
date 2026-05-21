import Script from "next/script";

// ─── Google Analytics 4 ───────────────────────────────────────
// Set NEXT_PUBLIC_GA_ID in .env.local (and in Vercel env vars)
// to enable tracking. The component renders nothing if the ID
// is not set, so it is safe to deploy without it.
// ─────────────────────────────────────────────────────────────

export default function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}', { page_path: window.location.pathname });
        `}
      </Script>
    </>
  );
}
