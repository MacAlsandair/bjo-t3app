import React from 'react';

const OstpreussenPage: React.FC = () => {
  return (
    <div className="page-container p-4 bg-gray-200 font-serif">
      <h1 className="text-4xl text-gray-800 border-b border-gray-400 pb-2">Bund Junges Ostpreußen</h1>

      <section className="section m-4 p-4 bg-white border border-gray-400 shadow">
        <h2 className="text-3xl text-gray-700 mt-4">Wer wir sind</h2>
        <p className="text-lg text-gray-600 leading-relaxed mt-2">
          Im Bund Junges Ostpreußen (BJO) haben sich Ostpreußen und Freunde Ostpreußens aus der jungen und mittleren Generation zusammengefunden, denen Ostpreußen ein Herzensanliegen ist. Sie sind hier, sei es aufgrund ihrer eigenen Abstammung, aus historischem Interesse, politischer Überzeugung, oder der Sehnsucht nach Abenteuern und Gemeinschaft. Der BJO wurde im Februar des Jahres 2000 ins Leben gerufen und ist stolz darauf, die Jugendorganisation der Landsmannschaft Ostpreußen zu sein.
        </p>
        {/* ...rest of your code... */}
      </section>
    </div>
  );
};

export default OstpreussenPage;
