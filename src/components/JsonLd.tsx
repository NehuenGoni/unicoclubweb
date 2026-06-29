/**
 * Renders a JSON-LD structured-data block. Server component.
 *
 * Per Next.js' JSON-LD guide, `<` is escaped to its unicode equivalent so the
 * stringified payload can't break out of the <script> tag (XSS hardening).
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
