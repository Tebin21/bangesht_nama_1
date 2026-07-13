import { getRequestConfig } from "next-intl/server";

/**
 * Invita-Technical-Architecture-Engineering-Blueprint.md §5: next-intl,
 * Sorani (ckb) default locale. Sprint 1 ships a single fixed locale — no
 * locale switching or [locale] routing yet, per the scoped-down sprint.
 */
export default getRequestConfig(async () => {
  const locale = "ckb";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
