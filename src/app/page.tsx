import React from 'react'
import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Button } from '@/components/Button'
import sampleImage from '@/images/amu_midasi.png' // 画像を `public` フォルダに入れる

import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies, loadArticles, type Article } from '@/lib/mdx'
import { formatDate } from '@/lib/formatDate'

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
          寄り添った解決策を提供し、支えていくことが私たちの使命です。
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
          現場のDXを支えます。
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
              スピーディーなモックアップ制作でお客様のイメージを具体化し、理想のウェブサイトを構築します。
            </ListItem>
            <ListItem title="Application development">
              データベースを活用したウェブアプリケーション開発を得意としています。お客様のニーズに合わせた最適なアプリケーションを提供いたします。
            </ListItem>
            <ListItem title="IoT Sensing">
              小規模なIoTセンシングシステムの開発にも対応可能です。センサーの選定からアプリケーション開発まで、一貫してサポートします。
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

function BlogSection({
  articles,
}: {
  articles: Array<MDXEntry<Article>>
}) {
  return (
    <>
      <SectionIntro
        eyebrow="Blog"
        title="最新の記事とニュース"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          テクノロジーの最新動向や、私たちの取り組みについて
          <br />
          定期的に情報をお届けしています。
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <FadeIn key={article.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={article.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={article.date}
                    className="font-semibold"
                  >
                    {formatDate(article.date)}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Blog</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {article.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {article.description}
                </p>
                <div className="mt-6 flex items-center gap-x-4">
                  <div className="flex-none overflow-hidden rounded-xl bg-neutral-100">
                    <Image
                      alt=""
                      {...article.author.image}
                      className="h-12 w-12 object-cover grayscale"
                    />
                  </div>
                  <div className="text-sm text-neutral-950">
                    <div className="font-semibold">
                      {article.author.name}
                    </div>
                    <div>{article.author.role}</div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
        <div className="mt-16 flex justify-center">
          <Button href="/blog" className="group">
            すべての記事を見る
            <span className="ml-2 transition group-hover:translate-x-1">
              →
            </span>
          </Button>
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
  let articles = await loadArticles()

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
          {/* テキスト部分 */}
          <FadeIn className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-7xl">
              テクノロジーを編む
            </h1>
            <p className="mt-6 text-lg text-neutral-600">
              私たちは、すべての人がテクノロジーと自然に心を通わせられる、そんな未来を思い描いています。
            </p>
            <p className="mt-6 text-lg text-neutral-600">
              特に、介護や保育のように、人と人との繋がりを大切にする現場にこそ、優しいテクノロジーが必要です。
            </p>
            <p className="mt-6 text-lg text-neutral-600">
              現場の声に耳を澄ませ、働く一人ひとりの負担を減らすこと。温かい解決策で、日々の仕事を支えます。
            </p>
          </FadeIn>

          {/* 画像部分 */}
          <div className="w-full md:w-1/2">
            <Image
              src={sampleImage}
              alt="ロゴ"
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </Container>

      {/* <CaseStudies caseStudies={caseStudies} /> */}

      <Teams />
      <BlogSection articles={articles} />
      <ContactSection />
    </>
  )
}
