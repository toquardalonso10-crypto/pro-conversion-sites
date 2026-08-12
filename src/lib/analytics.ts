/**
 * Couche analytics prête à brancher : Google Tag Manager / GA4 / Google Ads.
 *
 * Configuration : renseignez VITE_GTM_ID et/ou VITE_GA4_ID dans les variables
 * d'environnement. Les scripts ne sont chargés qu'après consentement (voir
 * CookieConsent) et les événements sont poussés dans window.dataLayer.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GTM_ID = import.meta.env["VITE_GTM_ID"] as string | undefined;
export const GA4_ID = import.meta.env["VITE_GA4_ID"] as string | undefined;
/** ID de conversion Google Ads, ex. "AW-123456789/AbC-D_efG" */
export const ADS_CONVERSION_ID = import.meta.env["VITE_ADS_CONVERSION_ID"] as string | undefined;

export const CONSENT_KEY = "cookie-consent-v1";

export type TrackEvent =
  | "cta_click"
  | "form_open"
  | "form_submit"
  | "phone_click"
  | "email_click"
  | "portfolio_view"
  | "pricing_click"
  | "roi_calculator_use"
  | "audit_popup_submit";

export function track(event: TrackEvent, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });
  if (import.meta.env.DEV) console.info("[analytics]", event, params);
}

export function hasConsent() {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(CONSENT_KEY) === "granted";
}

/** Charge GTM / GA4 une seule fois, uniquement si le consentement est donné. */
export function loadAnalytics() {
  if (typeof window === "undefined" || !hasConsent()) return;
  if (document.getElementById("analytics-loaded")) return;

  window.dataLayer = window.dataLayer ?? [];

  if (GTM_ID) {
    const s = document.createElement("script");
    s.id = "analytics-loaded";
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(s);
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    return;
  }

  if (GA4_ID) {
    const s = document.createElement("script");
    s.id = "analytics-loaded";
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    document.head.appendChild(s);
    window.gtag = (...args: unknown[]) => {
      window.dataLayer!.push(args as unknown as Record<string, unknown>);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA4_ID);
  }
}
