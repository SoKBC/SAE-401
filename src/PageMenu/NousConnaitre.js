import React from "react";

export default function Equipe() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Background shapes */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#008C45] to-[#CD212A] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            Présentation de l'APIRP
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
          Le 9 mai 1977 était déclarée à la Préfecture de Police de Paris la création de « L'Amicale des professeurs d'italien de la région parisienne ». Rebaptisée « Association des professeurs d'italien de la région parisienne » (APIRP) en 1984, elle eut pour président(e)s successifs(ives) des professeurs de Collège et de Lycée de l’Éducation Nationale, Jean Constantin, Pierre Méthivier, Anne Mazire, Gabrielle Kerleroux, Ketty Zanforlini et depuis janvier 2017, Romina De Lucia. 

Quarante ans après  sa création, sa vocation originelle (« établir et développer des liens de solidarité et d'amitié entre les italianistes de la région parisienne ») reste toujours d'actualité. Mais l'APIRP a évolué avec le temps. De nouvelles actions sont en effet apparues nécessaires : tout d'abord, la collecte d'informations fiables au sujet des implantations de postes dans les trois académies; ensuite, la mise en commun d'informations culturelles, de ressources pédagogiques, d'idées pour les cours; et enfin, l'entre-aide en cas de mutation, de fragilisation de poste, etc. Pour ce faire, l'APIRP entretient un dialogue régulier et constructif avec l'Inspection d'italien, en toute indépendance.

 L'APIRP a élaboré une plaquette de promotion de la langue italienne à destination des parents et des élèves en situation de choix, publie un bulletin par an, réunit ses adhérents en assemblée générale au début et à la fin de chaque année scolaire et a également créé un site Internet et une page Facebook. 

Elle est présente lors de manifestations culturelles italo-françaises (Forum des association italiennes du XIIIè arrondissement, Festa del libro des Blancs Manteaux, réceptions au Centre culturel et à l'Ambassade d'Italie, entre autres). Elle représente aussi tous les professeurs d'italien de l'Ile de France au Congrès annuel de la FNAI (Fédération Nationale des Associations d'Italianistes).
          </p>

      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">

        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Les élus du C.A et du Bureau
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
        Membres élus le 16 mars 2019
        </p>
      </div>
      <div className="grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Oliver Morin</p>
            <p className="text-sm text-gray-800">Président</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Ilaria Madonna</p>
            <p className="text-sm text-gray-800">Vice-Présidente</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Estelle Paint</p>
            <p className="text-sm text-gray-800">Secrétaire</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Valérie Guillouet</p>
            <p className="text-sm text-gray-800">Trésorière</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Alexandra Martinez</p>
            <p className="text-sm text-gray-800 text-center">Correspondante APIRP pour l'Académie de Paris</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Graziano Tassi</p>
            <p className="text-sm text-gray-800 text-center">Correspondant APIRP pour l'Académie de Créteil</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold text-center">Charlotte Ostrovsky-Richard</p>
            <p className="text-sm text-gray-800 text-center">Correspondante APIRP pour l'Académie de Versailles</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Gabrielle Kerleroux</p>
            <p className="text-sm text-gray-800 text-center">Secrétaire adjointe + Correspondante "CPGE"</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Gabrielle Kerleroux</p>
            <p className="text-sm text-gray-800 text-center">Secrétaire adjointe + Correspondante "CPGE"</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Gabrielle Kerleroux</p>
            <p className="text-sm text-gray-800 text-center">Secrétaire adjointe + Correspondante "CPGE"</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Gabrielle Kerleroux</p>
            <p className="text-sm text-gray-800 text-center">Secrétaire adjointe + Correspondante "CPGE"</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Gabrielle Kerleroux</p>
            <p className="text-sm text-gray-800 text-center">Secrétaire adjointe + Correspondante "CPGE"</p>
          </div>
        </div>

      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-36">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <h5 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nous contacter
          </h5>
          <p className="mt-6 text-base/7 text-gray-600 text-justify">
          Pour nous signaler tout changement de coordonnées personnelles (adresse de domicile, téléphone, courriel) ou professionnelles (changement d’établissement de rattachement, de statut, etc.), merci d’envoyer un courriel à : apirp.association@gmail.com. 
          <br className="hidden md:block" />
          Pour les renouvellement d’adhésion et pour les commandes de plaquettes pour la promotion de l’italien, nos adhérents peuvent aussi se servir des formulaires publiés dans les deux dernières page de notre bulletin annuel.
          <br className="hidden md:block" />
          Si vous souhaitez nous suivre, vous trouverez notre page Facebook ci-dessous.  
          </p>
          <hr className="mb-5 border-gray-300" />
          <div className="flex items-center space-x-4">
          <p className="leading-8 text-gray-600">Mail de contact : <u><a href="mailto:apirp.association@gmail.com" >apirp.association@gmail.com</a></u></p>
            <a
              href="https://facebook.com/APIRP"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>

          </div>
        </div>
        <div className="w-full h-full">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>

    </div>
    
        {/* Another background shape */}
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#008C45] to-[#CD212A] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
