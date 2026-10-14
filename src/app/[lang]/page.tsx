import { notFound } from "next/navigation";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Banner } from "@/components/sections/banner";
import { Faq } from "@/components/sections/faq";
import { RequestForm } from "@/components/sections/contact";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { Highlights } from "@/components/sections/highlights";
import { Process } from "@/components/sections/process";
import { ServiceArea } from "@/components/sections/service-area";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Header lang={lang} path="/" common={dict.common} nav={dict.nav} message={dict.messages.general} />
      <main id="main">
        <Hero dict={dict.hero} common={dict.common} message={dict.messages.general} />
        <Highlights dict={dict.highlights} />
        <Services dict={dict.services} common={dict.common} serviceMessage={dict.messages.service} />
        <WhyUs dict={dict.why} />
        <Banner dict={dict.banner} common={dict.common} message={dict.messages.general} />
        <Process dict={dict.process} common={dict.common} message={dict.messages.request} />
        <ServiceArea dict={dict.area} common={dict.common} message={dict.messages.area} />
        <Faq dict={dict.faq} />
        <RequestForm final={dict.final} form={dict.form} common={dict.common} message={dict.messages.request} />
        <FinalCta dict={dict.final} common={dict.common} message={dict.messages.final} />
      </main>
      <Footer lang={lang} dict={dict.footer} common={dict.common} nav={dict.nav} message={dict.messages.general} />
      <FloatingWhatsApp
        label={`${dict.common.whatsappTooltip} ${dict.common.newTabShort}`}
        tooltip={dict.common.whatsappTooltip}
        greeting={dict.messages.greeting}
      />
    </>
  );
}
