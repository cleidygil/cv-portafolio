// components/sections/Contact.tsx
'use client'

import { motion } from 'framer-motion'
import ContactCard from '@/components/ui/ContactCard'
import {SocialLinkPage} from '@/components/ui/SocialLink'
import { ContactItem, SocialLink } from '@/lib/type'

type ContactProps = {
  contactInfo: ContactItem[],
  socialLinks: SocialLink[]
}
export const Contact = ({ contactInfo, socialLinks }: ContactProps) => {
  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg my-6 p-4">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Vamos a <span className="text-purple-600 dark:text-purple-400">Trabajar Juntos</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? No dudes en contactarme. Estoy siempre abierto a nuevas oportunidades.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-8">
          {/* Información de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Información de Contacto
            </h3>
            
            <div className=" flex flex-row space-x-2 space-y-4 justify-center flex-wrap">
              {contactInfo.map((contact, index) => (
                <ContactCard
                  key={contact.type}
                  contact={contact}
                  index={index}
                />
              ))}
            </div>

            {/* Redes Sociales */}
           
          </motion.div>

          {/* Formulario de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center p-6 "
          >

            {/* <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Envíame un Mensaje
            </h3> */}
             <div className="pt-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Sígueme en mis redes
              </h4>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <SocialLinkPage
                    key={social.name}
                    social={social}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}