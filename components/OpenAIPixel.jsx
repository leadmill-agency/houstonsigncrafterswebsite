// OpenAI Ads measurement pixel (ads.openai.com — ChatGPT ads). Loader snippet
// verbatim from developers.openai.com/ads/measurement-pixel. Conversion events
// fire via trackOaiq() in lib/analytics.js (lead_created on form success);
// the server-side Conversions API twin lives in lib/leads.js, deduped by
// sharing the lead record id as event_id. The pixel ID is public by nature
// (visible in page source); env var overrides for testing.
const PIXEL_ID = process.env.NEXT_PUBLIC_OPENAI_PIXEL_ID || "6a8b718d71bc819dbbf4c802727ebb15";

export default function OpenAIPixel() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments);};q.q=[];w.oaiq=q;var js=d.createElement(s);js.async=true;js.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(js,f);})(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");oaiq("init",{pixelId:"${PIXEL_ID}"});`,
      }}
    />
  );
}
