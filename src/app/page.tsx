import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'

import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'



function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="解決が必要な現場をDXで支えたい。"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          本当にテクノロジーの力が必要なのは、介護や保育など、まだまだIT化が進んでいない現場です。
          <br />
          そういった現場に寄り添った解決策を提供し、支えていくことが私たちの使命です。
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Teams() {
  return (
    <>
      <SectionIntro
        eyebrow="Team"
        title="営業・エンジニアの2人チーム"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          医療・産業のリードカンパニー出身の営業と
          <br />
          プラント制御・社内DXのエンジニアがチームを組み
          <br />
          あなたのDXを支えます。
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              Webサービスの開発は、私たちの得意分野です。
              モックアップをスピーディーに作成し、イメージを実現していきます。
            </ListItem>
            <ListItem title="Application development">
              データベースを活用したウェブアプリケーションの開発が得意分野です。
              お客様のニーズに合わせたアプリケーションを提供します。
            </ListItem>
            <ListItem title="IoT Sencing">
              小規模なIoTセンシングの開発も得意分野です。
              お客様のニーズに合わせたセンシングとアプリケーションを提供します。
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-7xl">
            テクノロジーを編む
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            私たちはテクノロジーを身近に感じることができる世界を目指しています。
          </p>
        </FadeIn>
      </Container>


      {/* <CaseStudies caseStudies={caseStudies} /> */}

      <Teams />
      <ContactSection />
    </>
  )
}
