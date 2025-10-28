// Optimized for SEO: Content is server-rendered, only animations are client-side
import { Card, CardContent } from "@/components/ui/card";
import { StorySectionClient } from "./story-client";

export default function StorySection() {
  return (
    <section className="py-16 md:py-32" id="about">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center md:space-y-12">
          <StorySectionClient>
            <h2 className="text-4xl font-medium lg:text-5xl">
              Why I Started Code Results
            </h2>
          </StorySectionClient>
          {/* <ScrollView delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I watched too many business owners waste hours every day on tasks
              a computer could handle in seconds. Copying data between
              spreadsheets. Answering the same customer questions. Chasing leads
              manually. It didn&lsquo;t make sense.
              <br />
              <br />
              So I started building AI automation that actually solves these
              problems. Not fancy tech for the sake of it—just practical
              solutions that give people their time back. Now, businesses use
              what I build to work smarter, grow faster, and finally focus on
              what they&lsquo;re actually good at.
            </p>
          </ScrollView> */}
        </div>

        <StorySectionClient>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
            <Card className="sm:col-span-2 lg:row-span-2">
              <CardContent className="space-y-4 p-6">
                {/* <h3 className="text-xl font-semibold">
                  Why I Started Code Results
                </h3> */}
                <p className="font- text-lg">
                  I watched too many business owners waste hours every day on
                  tasks a computer could handle in seconds. Copying data between
                  spreadsheets. Answering the same customer questions. Chasing
                  leads manually. It didn&lsquo;t make sense when AI can do it
                  for you.
                  <br />
                  <br />
                  So I started building AI automation that actually solves these
                  problems. Not fancy tech for the sake of it just practical
                  solutions that give people their time back. Now, businesses I
                  have worked with use it to work smarter, grow faster, and
                  finally focus on what they&lsquo;re actually good at.
                </p>
                <br />
                <h3 className="text-xl font-semibold">What I Believe</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Technology should make your life easier, not more complicated.
                  Every automation I build is designed to save you real time and
                  actually work with how your business runs. No cookie-cutter
                  solutions. No tech jargon. Just systems that fit your needs
                  and get the job done.
                </p>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardContent className="space-y-4 p-6">
                <h3 className="text-xl font-semibold">How I Work</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I listen first. Every business is different, so I take time to
                  understand your specific challenges before building anything.
                  Then I create automation that actually fits into your workflow
                  not the other way around.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="space-y-4 p-6">
                <h3 className="text-xl font-semibold">My Promise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I only work on projects where I know I can deliver promising
                  ROI. If automation isn't the right answer, I will tell you
                  honestly. No overselling, no empty promises.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="space-y-4 p-6">
                <h3 className="text-xl font-semibold">What&lsquo;s Next</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I&lsquo;m focused on helping more small and medium businesses
                  so you won't get lost behind the big companies. Let&lsquo;s
                  build something that actually makes a difference
                </p>
              </CardContent>
            </Card>
          </div>
        </StorySectionClient>
      </div>
    </section>
  );
}
