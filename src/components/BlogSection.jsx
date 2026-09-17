import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

const BlogSection = () => {
  return (
    <section id="blog" className="scroll-mt-28 bg-[#f5f5f3] py-20">
      <div className="mx-auto max-w-7xl px-4">

        {/* Título */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
            Blog
          </h2>

          <p className="mt-4 text-lg text-neutral-600">
            Artículos y consejos para cuidar tu salud bucodental
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
            >

              {/* Imagen */}
              <Link to={`/blog/${post.slug}`} className="block h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </Link>

              {/* Contenido */}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm text-neutral-500">📅 {post.date}</p>

                <h3 className="mt-4 text-2xl font-extrabold leading-tight text-black">
                  <Link to={`/blog/${post.slug}`} className="hover:text-blue-700">
                    {post.title}
                  </Link>
                </h3>

                <p className="mt-4 flex-1 text-base leading-8 text-neutral-700">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex justify-end">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-lg font-medium text-[#E4B525] transition hover:text-black"
                  >
                    Leer más <span className="text-2xl">›</span>
                  </Link>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default BlogSection
