import Image from "next/image";
import bannerImage from "@/assets/photos/center-banner.png";
import { WhatsAppButton } from "@/components/ui/buttons";
import { Reveal } from "@/components/ui/reveal";
import type { Dictionary } from "@/i18n/dictionaries/ar";

/**
 * Full-width brand banner between "Why us" and "How it works". The copy sits on the photo's
 * open-road side (physically right in both directions) so the truck on the left stays clear.
 */
export function Banner({
  dict,
  common,
  message,
}: {
  dict: Dictionary["banner"];
  common: Dictionary["common"];
  message: string;
}) {
  return (
    <section aria-labelledby="banner-title" className="relative isolate overflow-hidden bg-ink">
      <Image
        src={bannerImage}
        alt={dict.imageAlt}
        fill
        placeholder="blur"
        sizes="100vw"
        className="-z-20 object-cover object-[22%_center] md:object-[30%_55%]"
      />
      {/* Phones: copy at the bottom over a rising shade. Larger screens: shade on the right only. */}
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/75 to-ink/10 md:hidden" />
      <div className="absolute inset-0 -z-10 hidden bg-linear-to-l from-ink/90 via-ink/60 to-ink/0 md:block" />

      <div className="mx-auto flex min-h-[34rem] max-w-7xl items-end px-4 py-16 sm:min-h-[36rem] sm:px-6 md:items-center md:py-24 lg:min-h-[40rem] lg:px-10">
        <Reveal className="w-full max-w-2xl ltr:md:ms-auto">
          <span className="block h-0.5 w-12 bg-brand-red" aria-hidden="true" />
          <h2
            id="banner-title"
            className="mt-6 text-balance font-display text-[2rem] font-bold leading-[1.4] text-white sm:text-5xl sm:leading-[1.25] ltr:leading-[1.15] ltr:tracking-tight ltr:sm:leading-[1.1]"
          >
            {dict.title[0]} <span className="text-brand-red sm:block">{dict.title[1]}</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-white/85 sm:text-lg sm:leading-9">{dict.body}</p>
          <WhatsAppButton message={message} newTabLabel={common.newTab} className="mt-9 w-full sm:w-auto">
            {dict.cta}
          </WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}
