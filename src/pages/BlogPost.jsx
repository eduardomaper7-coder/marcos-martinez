import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { blogPosts, getPostBySlug } from '../data/blogPosts'

const setMeta = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  const previous = tag.getAttribute('content')
  tag.setAttribute('content', content)
  return previous
}

const BlogPost = () => {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!post) return

    const previousTitle = document.title
    const previousDescription = setMeta('description', post.metaDescription)
    document.title = post.metaTitle

    return () => {
      document.title = previousTitle
      if (previousDescription) setMeta('description', previousDescription)
    }
  }, [post])

  if (!post) {
    return (
      <main className="mx-auto max-w-3xl px-4 pt-40 pb-24 text-center">
        <h1 className="text-3xl font-extrabold text-blue-700">
          Artículo no encontrado
        </h1>
        <Link
          to="/"
          className="mt-6 inline-block font-semibold text-blue-700 underline"
        >
          Volver al inicio
        </Link>
      </main>
    )
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <main className="bg-white pt-32 pb-20">
      <article className="mx-auto max-w-3xl px-4">
        <Link
          to="/"
          state={{ scrollTo: 'blog' }}
          className="text-sm font-semibold text-blue-700 hover:underline"
        >
          ‹ Volver al blog
        </Link>

        <p className="mt-6 text-sm text-neutral-500">📅 {post.date}</p>

        <h1 className="mt-3 text-3xl font-extrabold leading-tight text-blue-700 sm:text-4xl">
          {post.title}
        </h1>

        <div className="mt-8 overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(37,99,235,0.1)]">
          <img
            src={post.image}
            alt={post.imageAlt}
            className="h-64 w-full object-cover sm:h-96"
          />
        </div>

        <div className="mt-10 text-lg leading-8 text-neutral-700">
          {post.content.map((block, index) => {
            if (block.type === 'h2') {
              return (
                <h2
                  key={index}
                  className="mt-10 mb-4 text-2xl font-extrabold text-blue-700"
                >
                  {block.text}
                </h2>
              )
            }
            if (block.type === 'ul') {
              return (
                <ul key={index} className="mb-6 list-disc space-y-2 pl-6">
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )
            }
            return (
              <p key={index} className="mb-6">
                {block.text}
              </p>
            )
          })}
        </div>

        {/* Llamada a la acción */}
        <div className="mt-12 rounded-2xl bg-[#f4f8ff] p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold text-blue-700">
            Pide cita en Clínica Dental Marcos Martínez
          </h2>
          <p className="mt-3 text-lg leading-8 text-neutral-700">
            C. del Camino Viejo de Leganés, 115, Carabanchel, 28019 Madrid.{' '}
            <strong>Atendemos con cita previa.</strong>
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:915608109"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              <FaPhoneAlt />
              Llamar al 915 60 81 09
            </a>
            <a
              href="https://wa.me/34662671383"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white transition hover:bg-[#1ebe5b]"
            >
              <FaWhatsapp className="text-lg" />
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </article>

      {/* Artículos relacionados */}
      <section className="mx-auto mt-20 max-w-7xl px-4">
        <h2 className="text-center text-2xl font-extrabold text-black sm:text-3xl">
          Otros artículos
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition hover:-translate-y-1"
            >
              <img
                src={p.image}
                alt={p.imageAlt}
                className="h-44 w-full object-cover"
              />
              <h3 className="p-5 text-lg font-bold leading-snug text-black">
                {p.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

export default BlogPost
