import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import es from "./es";

export type Lang = "en" | "es";

const STORAGE_KEY = "nbe-lang";
const HTML_LANG: Record<Lang, string> = { en: "en", es: "es-AR" };

const isLang = (v: unknown): v is Lang => v === "en" || v === "es";

/**
 * Decide which language to show on first load:
 *  1. ?lang=es / ?lang=en in the URL (handy for sharing links)
 *  2. The visitor's previous manual choice (saved in localStorage)
 *  3. The computer's region: Argentine time zone, an "-AR" locale, or Spanish as a preferred language
 *  4. Otherwise English
 */
export function detectLang(): Lang {
  try {
    const q = new URLSearchParams(window.location.search).get("lang");
    if (isLang(q)) {
      try { localStorage.setItem(STORAGE_KEY, q); } catch { /* ignore */ }
      return q;
    }
  } catch { /* ignore */ }

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) return saved;
  } catch { /* ignore */ }

  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    // Browsers may report the legacy alias (e.g. "America/Cordoba") instead of "America/Argentina/Cordoba".
    const AR_LEGACY = ["Buenos_Aires", "Catamarca", "Cordoba", "Jujuy", "Mendoza", "Rosario"];
    if (tz.startsWith("America/Argentina/") || AR_LEGACY.some((c) => tz === `America/${c}`)) return "es";
  } catch { /* ignore */ }

  const langs =
    typeof navigator !== "undefined"
      ? (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language])
      : [];
  if (langs.some((l) => /^es\b/i.test(l || "") || /-AR$/i.test(l || ""))) return "es";

  return "en";
}

// Module-level current language so tx() can be called anywhere during render.
let current: Lang = typeof window !== "undefined" ? detectLang() : "en";

export const getLang = () => current;
export const isEs = () => current === "es";

/**
 * Translate a user-visible string. Non-strings pass through untouched, and any
 * string without a Spanish entry falls back to the English original.
 * Leading/trailing whitespace is preserved so inline JSX spacing stays intact.
 */
export function tx<T>(value: T): T {
  if (current === "en" || typeof value !== "string") return value;
  const m = /^(\s*)([\s\S]*?)(\s*)$/.exec(value);
  if (!m) return value;
  const hit = es[m[2]];
  return (hit !== undefined ? m[1] + hit + m[3] : value) as unknown as T;
}

/** Translate a template with {0}, {1}... placeholders, then fill them in. */
export function tf(template: string, ...args: (string | number)[]): string {
  return tx(template).replace(/\{(\d+)\}/g, (_, i) => String(args[Number(i)] ?? ""));
}

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: current,
  setLang: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(current);

  const setLang = useCallback((l: Lang) => {
    current = l;
    try { localStorage.setItem(STORAGE_KEY, l); } catch { /* ignore */ }
    setLangState(l);
  }, []);

  // Keep module-level value in sync during render (covers StrictMode double renders).
  current = lang;

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang];
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);

/** EN | ES toggle shown in the top navigation (desktop and mobile). */
export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  const btn = (l: Lang, label: string, title: string) => (
    <button
      type="button"
      onClick={() => setLang(l)}
      aria-pressed={lang === l}
      title={title}
      className={`px-2.5 py-1 rounded-full text-xs font-semibold transition ${
        lang === l ? "bg-cyan-500 text-slate-900" : "text-slate-300 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
  return (
    <div
      role="group"
      aria-label={lang === "es" ? "Idioma" : "Language"}
      className={`inline-flex items-center gap-0.5 rounded-full border border-slate-700 bg-slate-900 p-0.5 ${className}`}
    >
      {btn("en", "EN", "English")}
      {btn("es", "ES", "Español (Argentina)")}
    </div>
  );
}
