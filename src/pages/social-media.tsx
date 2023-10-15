import de from '../../dictionaries/de.json';
import ru from '../../dictionaries/ru.json';

import { useRouter } from "next/router";
import { FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa'; // Importing Font Awesome icons

const SocialMediaSection: React.FC = () => {
  
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'de' ? de : ru;

  return (
    <div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-lg"> 
      <h1 className="text-4xl font-bold mb-8 text-blue-600">{t.title}</h1>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
          <FaTwitter className="w-12 h-12 mr-4 text-blue-400" />
          <div>
            <p className="text-lg font-bold">{t.twitter}</p>
            <p className="text-sm">{t.twitterDescription}</p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
          <FaFacebookF className="w-12 h-12 mr-4 text-blue-600" />
          <div>
            <p className="text-lg font-bold">{t.facebookPage}</p>
            <p className="text-sm">{t.facebookPageDescription}</p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
          <FaYoutube className="w-12 h-12 mr-4 text-red-500" />
          <div>
            <p className="text-lg font-bold">{t.ostpreussenTV}</p>
            <p className="text-sm">{t.ostpreussenTVDescription}</p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
          <FaFacebookF className="w-12 h-12 mr-4 text-blue-600" />
          <div>
            <p className="text-lg font-bold">{t.facebookGroup}</p>
            <p className="text-sm">{t.facebookGroupDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaSection;