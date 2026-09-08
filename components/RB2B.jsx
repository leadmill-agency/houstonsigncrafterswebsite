import Script from "next/script";

// RB2B — identifies US companies/visitors on the site and feeds the Growth OS
// high-intent visitor workflow (PB08). The key is site-specific and public (it
// ships in the HTML), so it lives here with an env override; production-only so
// dev/preview sessions never pollute visitor data.
export default function RB2B() {
  const key = process.env.NEXT_PUBLIC_RB2B_KEY || "1N5W0HJJYXO5";
  if (!key || process.env.NODE_ENV !== "production") return null;
  return (
    <Script id="rb2b" strategy="afterInteractive">
      {`!function(key) {if (window.reb2b) return;window.reb2b = {loaded: true};var s = document.createElement("script");s.async = true;s.src = "https://ddwl4m2hdecbv.cloudfront.net/b/" + key + "/" + key + ".js.gz";document.getElementsByTagName("script")[0].parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);}("${key}");`}
    </Script>
  );
}
