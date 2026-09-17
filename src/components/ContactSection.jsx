import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa'

const ContactSection = () => {
  return (
    <section id="contacto" className="scroll-mt-28 bg-[#f4f8ff] py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-blue-700 sm:text-4xl">
            Contacto
          </h2>

          <p className="mt-4 text-lg leading-8 text-neutral-600">
            Estamos aquí para ayudarte. Contacta con Clínica Dental Marcos
            Martínez para reservar tu cita.
          </p>
        </div>

        <div className="space-y-5">
          
          {/* Dirección */}
          <div className="flex gap-5 rounded-xl bg-white px-6 py-6 shadow-[0_10px_30px_rgba(37,99,235,0.08)]">
            <div className="pt-1 text-xl text-blue-700">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-700">Dirección</h3>

              <p className="mt-2 text-lg text-neutral-600">
                C. del Camino Viejo de Leganés, 115, Carabanchel, 28019 Madrid
              </p>
            </div>
          </div>

          {/* Teléfono */}
          <div className="flex gap-5 rounded-xl bg-white px-6 py-6 shadow-[0_10px_30px_rgba(37,99,235,0.08)]">
            <div className="pt-1 text-xl text-blue-700">
              <FaPhoneAlt />
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-700">Teléfono</h3>

              <a
                href="tel:915608109"
                className="mt-2 block whitespace-nowrap text-lg text-neutral-600 transition hover:text-blue-700"
              >
                915 60 81 09
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex gap-5 rounded-xl bg-white px-6 py-6 shadow-[0_10px_30px_rgba(37,99,235,0.08)]">
            <div className="pt-1 text-xl text-blue-700">
              <FaEnvelope />
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-700">
                WhatsApp
              </h3>

              <a
                href="https://wa.me/34662671383"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-lg text-neutral-600 transition hover:text-blue-700"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </div>

          {/* Horario */}
          <div className="flex gap-4 rounded-xl bg-white px-4 py-6 shadow-[0_10px_30px_rgba(37,99,235,0.08)] sm:gap-5 sm:px-6">
            <div className="pt-1 text-xl text-blue-700">
              <FaClock />
            </div>

            <div className="w-full min-w-0">
              <h3 className="text-xl font-bold text-blue-700">
                Horario de consulta
              </h3>

              <p className="mt-2 text-lg font-bold text-neutral-800">
                Con cita previa
              </p>

              <div className="mt-4 space-y-4 text-base text-neutral-700 sm:text-lg">
                {[
                  ['Mañanas', 'Lunes a Viernes de 10:00 a 12:30h'],
                  ['Tardes', 'Lunes a Jueves de 16:30 a 19:30h'],
                ].map(([label, hours]) => (
                  <div
                    key={label}
                    className="flex flex-col border-b border-blue-100 pb-3 last:border-b-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                  >
                    <span className="font-semibold text-blue-700">
                      {label}
                    </span>

                    <span className="mt-1 leading-7 text-neutral-700 sm:mt-0 sm:text-right">
                      {hours}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-6 rounded-lg bg-blue-50 px-4 py-3 text-base leading-7 text-neutral-700">
                Por favor, solicite cita por teléfono antes de acudir a consulta.
              </p>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
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
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection