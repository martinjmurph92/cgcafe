import { getSettings } from "@/actions/global";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export async function Head() {
  const settings = await getSettings();

  const head = settings?.integrations?.custom?.head;

  return renderCustomHTML(head);
}

export async function BodyOpen() {
  const settings = await getSettings();

  const gtmId = settings?.integrations?.googleTagManager;
  const bodyOpen = settings?.integrations?.custom?.bodyOpen;

  return (
    <>
      {gtmId && <GoogleTagManager gtmId={gtmId} />}
      {renderCustomHTML(bodyOpen)}
    </>
  );
}

export async function BodyClose() {
  const settings = await getSettings();

  const gaId = settings?.integrations?.googleAnalytics;
  const bodyClose = settings?.integrations?.custom?.bodyClose;

  return (
    <>
      {gaId && <GoogleAnalytics gaId={gaId} />}
      {renderCustomHTML(bodyClose)}
    </>
  );
}

function renderCustomHTML(html: string | null | undefined) {
  if (!html?.trim()) return null;

  return (
    <div
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html.trim() }}
    />
  );
}
