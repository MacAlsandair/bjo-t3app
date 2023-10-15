// components/ContentSection.tsx
import React from 'react';
import { useRouter } from 'next/router';
import de from '../../dictionaries/de.json';
import ru from '../../dictionaries/ru.json';

const ContentSection: React.FC = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'de' ? de : ru;

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">{t.jetztMitgliedWerden}</h2>
            <p className="text-lg mb-4">{t.mitgliedWerdenDescription}</p>
            <p className="text-lg mb-4">{t.abenteurerGesucht}</p>
            <p className="text-lg mb-4">{t.wirFreuenUns}</p>
            <p className="text-lg mb-4">{t.kontaktEmail}</p>
            <a href="#" className="text-lg text-blue-500 underline">{t.mitgliedsantragLink}</a>
          </div>
          <div>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/FEmZHsn2xr0"
              title="OstpreussenTV"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="text-lg mt-4">{t.mehrInformationen}</p>
            <a href="http://www.youtube.com/user/OstpreussenTV" className="text-lg text-blue-500 underline">{t.youtubeLink}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
