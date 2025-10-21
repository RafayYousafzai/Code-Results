// Server Component - SEO Optimized
// Statistics are crawlable for better search engine visibility
import { StatsScrollView, StatsMotionDiv } from "./stats-client";

export default function StatsSection() {
  return (
    <section className="py-12 md:py-20" id="stats">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <StatsScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl ">
              Powering Growth Through Smart Automation
            </h2>
          </StatsScrollView>
          <StatsScrollView delay={0.2}>
            <p>
              At Code Results, we build intelligent solutions — from AI agents
              to full-stack applications — that help businesses save time, scale
              faster, and stay ahead in the digital era.
            </p>
          </StatsScrollView>
        </div>
        <StatsScrollView stagger delay={0.04}>
          <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
            <StatsMotionDiv>
              <div className="text-5xl font-bold">+21</div>
              <p>Workflows Automated</p>
            </StatsMotionDiv>
            <StatsMotionDiv>
              <div className="text-5xl font-bold">70%</div>
              <p>Average Efficiency Boost</p>
            </StatsMotionDiv>
            <StatsMotionDiv>
              <div className="text-5xl font-bold">2+</div>
              <p>Years of Innovation</p>
            </StatsMotionDiv>
          </div>
        </StatsScrollView>
      </div>
    </section>
  );
}
