import { Phone } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/buttons";
import { Reveal, SectionEyebrow } from "@/components/ui/reveal";
import type { Dictionary } from "@/i18n/dictionaries/ar";
import { PHONE_DISPLAY, TEL_HREF } from "@/lib/site";

/** Contact strip: heading on one side, WhatsApp request and phone on the other. */
export function RequestForm({
  final,
  form,
  common,
  message,
}: {
  final: Dictionary["final"];
  form: Dictionary["form"];
  common: Dictionary["common"];
  message: string;
}) {
  return (
    <section id="request" aria-labelledby="request-title" className="border-t border-line bg-mist py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <Reveal className="lg:col-span-7">
          <SectionEyebrow>{final.eyebrow}</SectionEyebrow>
          <h2 id="request-title" className="mt-6 text-balance font-display text-4xl font-bold leading-[1.25] text-brand-blue sm:text-5xl">
            {form.heading}
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-slate">{final.directNote}</p>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5">
          <div className="flex flex-col gap-8 border border-line bg-paper p-6 shadow-[0_30px_60px_-40px_rgb(21_101_192/0.45)] sm:p-10">
            <WhatsAppButton message={message} newTabLabel={common.newTab} className="w-full">
              {final.cta}
            </WhatsAppButton>
            <a href={TEL_HREF} className="group inline-flex items-center gap-4">
              <span className="flex size-12 items-center justify-center rounded-full border border-brand-blue/30 bg-paper text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                <Phone className="size-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs text-slate-light">{final.orCall}</span>
                <span dir="ltr" className="font-display text-xl font-semibold tabular-nums text-ink transition-colors group-hover:text-brand-blue rtl:text-right">
                  {PHONE_DISPLAY}
                </span>
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
