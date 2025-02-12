import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { MOCK_COMMON_SITE } from "@onex/mocks"

const siteUrl = process.env.NEXT_PUBLIC_ABSOLUTE_URL;

export function SeoProvider({ children }: { children?: React.ReactNode }) {
  const router = useRouter();
  const currentPath = router.asPath;
  const fullUrl = `${siteUrl}${currentPath}`;

  return (
    <>
      <Head>
        {/* Canonical Tag */}
        <link rel="canonical" href={fullUrl} />

        {/* Hreflang Tags */}
        {MOCK_COMMON_SITE.locales.map(({ iso_alpha_2, key }) => (
          <link key={key} rel="alternate" hrefLang={`en-${iso_alpha_2}`} href={`${siteUrl}/${key}${currentPath}`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />
      </Head>

      {children}
    </>
  );
}
