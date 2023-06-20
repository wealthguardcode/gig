import ContactPrimaryCTA from '../../components/ContactPrimaryCTA'
import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import Popup from '../../components/Popup'
import Select from '../../components/Select'
import { getMarkdown } from '../../lib/getMarkdown'
import { classNames } from '../../utils/helpers'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {
  AdjustmentsIcon,
  DocumentTextIcon,
  ExternalLinkIcon,
  XIcon,
} from '@heroicons/react/solid'

export default function BlogPage({ articles }) {
  const { query } = useRouter()

  const filteredArticles = useMemo(() => {
    const category = query.category
    const tags = query.tags
      ? Array.isArray(query.tags)
        ? query.tags
        : [query.tags]
      : []

    let filtered = articles

    if (category) {
      filtered = filtered.filter(
        ({ frontmatter }) => frontmatter.category === category
      )
    }
    if (Array.isArray(tags) && tags.length) {
      filtered = filtered.filter(({ frontmatter }) => {
        const articleTags = frontmatter.tags?.map((t) => t.trim())

        return articleTags?.some((tag) => tags.includes(tag))
      })
    }

    return filtered
  }, [articles, query.category, query.tags])

  return (
    <Layout title='WIG | Blog'>
      <Hero image='/images/programs-hero.jpeg' title='Blog'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam quis.
      </Hero>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-12 max-w-9xl my-10 mx-auto p-8'>
        <ArticleFilters
          articles={articles}
          filteredArticles={filteredArticles}
        />

        <div className='col-span-12 md:col-span-7 lg:col-span-8 xl:col-span-9'>
          {Array.isArray(filteredArticles) && filteredArticles.length ? (
            <section className='grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3'>
              {filteredArticles.map((article) => (
                <article
                  className='max-w-sm rounded overflow-hidden shadow-xl mx-auto hover:shadow-2xl border hover:border-red-400 dark:hover:border-red-600 dark:bg-gray-900 transform transition duration-500 md:hover:scale-110 hover:scale-105'
                  key={article.slug}>
                  <Link href={`/blog/${article.slug}`} passHref>
                    <a>
                      <Image
                        className='w-full'
                        src={article.frontmatter.image}
                        height={300}
                        width={400}
                        priority={true}
                        placeholder='blur'
                        blurDataURL
                        alt={article.frontmatter.title}
                      />
                    </a>
                  </Link>
                  <div className='px-6 py-4 flex flex-col items-center'>
                    <Link href={`/blog/${article.slug}`} passHref>
                      <a className='inline-flex items-center mb-2 px-3 py-2 border border-transparent rounded-md text-xl font-bold leading-4 text-center text-white bg-red-500 dark:bg-red-700 dark:text-white hover:bg-red-700 dark:hover:bg-red-500 dark:hover:text-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'>
                        {article.frontmatter.title}{' '}
                        <span>
                          <ExternalLinkIcon className='ml-1' height={20} />
                        </span>
                      </a>
                    </Link>
                  </div>
                </article>
              ))}
            </section>
          ) : (
            <section className='flex flex-col gap-8 justify-center items-center w-full h-96 rounded-md text-lg text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900'>
              <DocumentTextIcon className='h-20 w-20' />
              <span>No articles match your search criteria</span>
            </section>
          )}
        </div>
      </div>

      <ContactPrimaryCTA />
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: getMarkdown('blog'),
    },
  }
}

function ArticleFilters({ articles, filteredArticles }) {
  const router = useRouter()
  const { query } = router

  const [isOpen, setOpen] = useState(false)

  const { categories, tags } = useMemo(
    () => ({
      categories: getCategoryFilters(articles),
      tags: getTagFilters(filteredArticles),
    }),
    [articles, filteredArticles]
  )

  const appliedFilterCount =
    (query.category ? 1 : 0) +
    (Array.isArray(query.tags) ? query.tags.length : query.tags ? 1 : 0)

  return (
    <div className='col-span-12 w-full max-w-sm mx-auto md:col-span-5 md:pr-6 lg:col-span-4 xl:col-span-3'>
      <div className='md:hidden'>
        <button
          onClick={() => setOpen(true)}
          className='inline-flex gap-2 justify-center items-center w-full h-16 py-3 px-5 border border-gray-200 select-none dark:border-gray-600 rounded-md text-xl font-bold text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-900'>
          {appliedFilterCount ? (
            <span className='inline-block w-auto py-0.5 px-3 rounded-md text-white bg-red-500 dark:bg-red-600'>
              {appliedFilterCount}
            </span>
          ) : (
            <AdjustmentsIcon height={24} />
          )}
          <span>Filter{appliedFilterCount === 1 ? '' : 's'}</span>
        </button>
        <Popup
          isOpen={isOpen}
          closePopup={() => setOpen(false)}
          title={
            <div className='flex gap-2 justify-start items-center'>
              <AdjustmentsIcon height={24} />
              <span className='leading-0'>Filters</span>
            </div>
          }
          primaryAction={{
            text: 'Update',
            onClick: () => setOpen(false),
          }}
          secondaryAction={{
            text: 'Clear All',
            onClick: () => {
              router.push(router.pathname, undefined, { scroll: false })
              setOpen(false)
            },
          }}>
          <div className='flex flex-col gap-6 w-full my-2 p-4'>
            <CategoryFilter router={router} categories={categories} />
            <TagsFilter router={router} tags={tags} />
          </div>
        </Popup>
      </div>
      <div className='hidden md:flex md:flex-col md:gap-6'>
        <CategoryFilter router={router} categories={categories} />
        <TagsFilter router={router} tags={tags} />
      </div>
    </div>
  )
}

function CategoryFilter({ router, categories }) {
  const { query } = router

  const setCategory = (category) => {
    router.push(
      {
        pathname: router.pathname,
        query: { ...query, category },
      },
      undefined,
      { scroll: false }
    )
  }

  const clearCategory = () => {
    router.push(
      {
        pathname: router.pathname,
        query: query.tags ? { tags: query.tags } : {},
      },
      undefined,
      { scroll: false }
    )
  }

  return (
    <div>
      <span className='block mb-4 text-xl font-bold text-gray-700 dark:text-gray-800 md:text-2xl md:dark:text-gray-300'>
        Category
      </span>
      <Select
        disabled={!Array.isArray(categories) || !categories.length}
        placeholder='All categories'
        options={categories}
        selected={query.category}
        setSelected={(name) => {
          if (!name) {
            clearCategory()
          } else {
            setCategory(name)
          }
        }}
      />
    </div>
  )
}

function TagsFilter({ router, tags }) {
  const { query } = router

  const addTag = (tag) => {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...query,
          tags: query.tags
            ? Array.isArray(query.tags)
              ? [...query.tags, tag]
              : [query.tags, tag]
            : [tag],
        },
      },
      undefined,
      { scroll: false }
    )
  }

  const removeTag = (tag) => {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...query,
          tags: query.tags
            ? Array.isArray(query.tags) && query.tags.length > 1
              ? query.tags?.filter((t) => t !== tag)
              : []
            : [],
        },
      },
      undefined,
      { scroll: false }
    )
  }

  return (
    <div>
      <span className='block mb-4 text-xl font-bold text-gray-700 dark:text-gray-800 md:text-2xl md:dark:text-gray-300'>
        Tags
      </span>
      {Array.isArray(tags) && tags.length ? (
        <ul className='inline-flex flex-wrap gap-3'>
          {tags.map(({ name, count }) => {
            const isSelected = query.tags?.includes(name)

            return (
              <li key={name}>
                <button
                  onClick={() => (isSelected ? removeTag(name) : addTag(name))}
                  className={classNames(
                    'group overflow-hidden flex justify-start items-center py-0 rounded hover:text-red-900 hover:bg-red-100',
                    isSelected
                      ? 'text-red-800 bg-red-50'
                      : 'text-gray-800 bg-gray-50 dark:bg-white'
                  )}>
                  <span className='flex gap-1 items-center py-1 px-2'>
                    <span className='font-medium'>{name}</span>
                    <span
                      className={classNames(
                        'text-sm py-0 px-1 rounded-sm group-hover:text-red-600 group-hover:bg-red-200',
                        isSelected
                          ? 'text-red-700 bg-red-100'
                          : 'text-gray-500 bg-gray-100'
                      )}>
                      {count}
                    </span>
                  </span>
                  {isSelected && (
                    <span className='flex p-1 pr-2'>
                      <XIcon height={16} className='text-red-900' />
                    </span>
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      ) : (
        <div className='flex justify-center items-center w-full h-20 rounded-md text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 opacity-50'>
          <span>There aren&apos;t any tags available</span>
        </div>
      )}
    </div>
  )
}

function getCategoryFilters(articles) {
  const categoriesObj = articles.reduce(
    (accum, { frontmatter: { category: c } }, index) => {
      if (!c?.trim()) return accum

      const category = c.trim()

      if (accum[category]) {
        accum[category] += 1
      } else {
        accum[category] = 1
      }

      return accum
    },
    {}
  )

  return Object.keys(categoriesObj)
    .map((category) => ({ name: category, count: categoriesObj[category] }))
    .sort((a, b) => a.name.localeCompare(b.name))
}

function getTagFilters(articles) {
  const tagsObj = articles.reduce((accum, { frontmatter: { tags } }, index) => {
    const tagsArr = tags?.map((t) => t.trim())

    if (!Array.isArray(tagsArr) || !tagsArr.length) return accum

    tagsArr.forEach((tag) => {
      if (accum[tag]) {
        accum[tag] += 1
      } else {
        accum[tag] = 1
      }
    })

    return accum
  }, {})

  return Object.keys(tagsObj)
    .map((tag) => ({ name: tag, count: tagsObj[tag] }))
    .sort((a, b) => a.name.localeCompare(b.name))
}
