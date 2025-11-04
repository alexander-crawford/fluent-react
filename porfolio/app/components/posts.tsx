import Link from 'next/link'
import { formatDate, getBlogPosts, getExperiencePosts} from 'app/blog/utils'
import { LinkIcon } from "app/components/link";

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-fit tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}

export function ExperiencePosts() {
  let allExperience = getExperiencePosts()

  return (
    <div>
      {allExperience
        .sort((a, b) => {
          const aEnded = a.metadata.ended;
          const bEnded = b.metadata.ended;

          if (aEnded === '' && bEnded !== '') return -1; 
          if (aEnded !== '' && bEnded === '') return 1;  

          if (new Date(aEnded) > new Date(bEnded)) return -1;
          if (new Date(aEnded) < new Date(bEnded)) return 1;

          return 0; 
        })
        .map((post) => (
          <div className="flex flex-col space-y-1 mb-4" >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-fit tabular-nums">
                <span>{formatDate(post.metadata.started, false, true)}</span>
                <span> - </span>
                <span>{formatDate(post.metadata.ended, false, true)}</span>
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                <span>{post.metadata.title}</span>
                <span> - </span>
                <span>{post.metadata.company}</span>
                <LinkIcon href={post.metadata.link} />
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.tech.map((item, index) => (
                  <span>{item} </span>
                ))}
              </p>
            </div>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {post.metadata.summary}
            </p>
          </div>
        ))}
    </div>
  )
}
