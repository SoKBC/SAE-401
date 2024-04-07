import React from 'react';

export default function Adherer () {

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
            Adhésion à l'ARPIP
          </p>
      </div>
        
      <div className="px-4">
            <div className="flex flex-col max-w-6xl mx-auto md:flex-row">
                <dl className="w-full">
                    <dt className="mb-4">
                        <h3 className="text-2xl leading-8 font-semibold">
                            Pourquoi adhérer à l'APIRP ?
                        </h3>
                    </dt>
                    <dd className="mb-10">
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Pour :
                            <li>
                            Participer activement aux assemblées générales.
                            </li>
                            <li>
                            Recevoir chaque année le bulletin imprimé de l’association et les plaquettes gratuites pour la promotion de l’italien.    
                            </li>
                            <li>
                            Soutenir des initiatives pour la promotion de l’enseignement de l’italien en île-de-France :
                            </li>
                            - la réalisation de ce site, conçu comme un outil de partage et de renseignement pour tous les professeurs d’italien de l’île-de-France ;<br></br>

                            - la réalisation et l’impression de plaquettes pour la promotion de l’italien<br></br>

                            - notre présence lors des manifestations et des évènements culturels (tels que La festa del libro e della cultura italiana ou le Forum des associations franco-italiennes, etc)
                            <li>
                            Connaître le réseaux des professeurs d’italien de la Région Parisienne.
                            </li>
                            <li>
                            Pouvoir être représenté et soutenu, en toutes circonstances et auprès des instances officielles, par une association reconnue.
                            </li>
                            <li>
                            L’union faisant la force, l’A.P.I.R.P. est un moyen pour ne pas rester isolé et avoir des échanges actifs sur notre métier.
                            </li>
                        </p>

                    </dd>
                    <dt className="mb-4">
                        <h3 className="text-2xl leading-8 font-semibold">
                            Qui peut y adhérer ?
                        </h3>
                    </dt>
                    <dd className="mb-10">
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                        Peuvent faire partie de l’Association tous les professeurs d’italien de la région parisienne en activité ou à la retraite, quel que soit l’ordre d’enseignement auquel ils appartiennent.
                        </p>
                    </dd>
                    <dt className="mb-4">
                        <h3 className="text-2xl leading-8 font-semibold">
                            Comment y adhérer ?
                        </h3>
                    </dt>
                    <dd className="mb-10">
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                        Pour devenir membres il faut : remplir une fiche d’inscription ET verser annuellement une cotisation, dont le montant est fixé chaque année par le Conseil d’administration.
                        </p>
                    </dd>
                </dl>
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
    )
            
}