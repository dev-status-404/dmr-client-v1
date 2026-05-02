import GradientShell from "@/components/ui/gradient-scroll";
import FeatureGrid from "@/components/layout/marketing/feature-grid";
import GameStrip from "@/components/layout/marketing/game-strip";
import Hero from "@/components/layout/marketing/hero";
import HowToPlay from "@/components/layout/marketing/how-to-play";
import JoinCta from "@/components/layout/marketing/join-cta";
import Payments from "@/components/layout/marketing/payments";
import Rewards from "@/components/layout/marketing/rewards";
import ContactForm from "@/components/layout/marketing/contact-form";
import SocialLinks from "@/components/layout/marketing/social-links";
import WhyChooseUs from "@/components/layout/marketing/why-choose-us";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/common/header";
import Container from "@/components/common/container";
import Footer from "@/components/common/footer";
import DepositRedeemSection from "@/components/layout/marketing/deposit-redeem";

export default function Page() {
  return (
    <GradientShell>
      <main className="w-full bg-transparent">
        <Container className="py-6 bg-transparent">
          <Header />
          <div className="mt-10" />
          <JoinCta />
          <div className="mt-10" />
          <Hero />
          <div className="mt-10" />
          {/* <FeatureGrid /> */}
          <div className="mt-8" />
          <GameStrip />
          <div className="mt-10" />
          <WhyChooseUs />
          <div className="mt-10" />
          <HowToPlay />
          <div className="mt-10" />
          <Rewards />
          <div className="mt-10" />
          <ContactForm />
          <div className="mt-10" />
          <SocialLinks />
          <Footer />
        </Container>
      </main>
    </GradientShell>
  );
}
