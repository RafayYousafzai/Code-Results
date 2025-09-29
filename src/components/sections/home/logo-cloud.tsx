"use client";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
// Import logos from react-icons
import {
  SiZapier,
  SiN8N,
  SiMake,
  SiHuggingface,
  SiOpenai,
  SiAnthropic,
  SiGoogle,
  SiAmazon,
  SiSlack,
  SiNotion,
  SiAirtable,
  SiTelegram,
  SiWhatsapp,
  SiStripe,
  SiShopify,
  SiWordpress,
  SiWoocommerce,
  SiDiscord,
  SiGmail,
  SiGooglesheets,
  SiTrello,
  SiAsana,
} from "react-icons/si";

// Custom icon component for services not available in react-icons
const CustomIcon = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => (
  <div
    className={`${className} flex items-center justify-center bg-white/10 rounded-lg`}
  >
    <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 text-center px-1">
      {name}
    </span>
  </div>
);

export default function LogoCloud() {
  const logos = [
    { component: SiOpenai, name: "OpenAI" },
    { component: SiAnthropic, name: "Claude" },
    // {
    //   component: () => <CustomIcon name="Gemini" className="size-12" />,
    //   name: "Google Gemini",
    // },
    // {
    //   component: () => <CustomIcon name="Retell" className="size-12" />,
    //   name: "Retell AI",
    // },
    // {
    //   component: () => <CustomIcon name="11Labs" className="size-12" />,
    //   name: "ElevenLabs",
    // },
    // { component: SiHuggingface, name: "Hugging Face" },
    // {
    //   component: () => <CustomIcon name="Azure" className="size-12" />,
    //   name: "Azure AI",
    // },
    // {
    //   component: () => <CustomIcon name="Voiceflow" className="size-12" />,
    //   name: "Voiceflow",
    // },
    // {
    //   component: () => <CustomIcon name="Bubble" className="size-12" />,
    //   name: "Bubble",
    // },
    { component: SiZapier, name: "Zapier" },
    { component: SiN8N, name: "n8n" },
    { component: SiMake, name: "Make" },
    { component: SiSlack, name: "Slack" },
    { component: SiNotion, name: "Notion" },
    { component: SiAirtable, name: "Airtable" },
    { component: SiTelegram, name: "Telegram" },
    { component: SiWhatsapp, name: "WhatsApp" },
    { component: SiDiscord, name: "Discord" },
    { component: SiGmail, name: "Gmail" },
    { component: SiGooglesheets, name: "Google Sheets" },
    { component: SiStripe, name: "Stripe" },
    { component: SiShopify, name: "Shopify" },
    { component: SiWordpress, name: "WordPress" },
    { component: SiTrello, name: "Trello" },
    { component: SiAsana, name: "Asana" },
    { component: SiAmazon, name: "AWS" },
  ];

  return (
    <section className="overflow-hidden py-16">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm hidden xl:block">
              Powering the best teams
            </p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={100}>
              <div className="flex">
                {logos.map(({ component: Logo, name }, idx) => (
                  <div key={idx} className="flex mx-4">
                    <Logo className="size-12" title={name} />
                  </div>
                ))}
              </div>
            </InfiniteSlider>
          </div>
        </div>
      </div>
    </section>
  );
}
