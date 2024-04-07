import React from 'react';

export default function Promouvoir () {

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
           Promouvoir l'italien
          </p>
      </div>
        
      <div className="px-4">
            <div className="flex flex-col max-w-6xl mx-auto md:flex-row">
                <dl className="w-full">
                    <dt className="mb-4">
                    <h3 className="text-3xl leading-8 font-bold">
                            La plaquette éditée par l'ARPIP
                    </h3>
                    <p className="mt-6 text-lg leading-8 text-gray-600 mb-10">
                    L'APIRP a édité un dépliant pour la promotion de l'apprentissage de la langue italienne dans les établissements scolaires de l'Île-de-France.
                    </p>

                    <img
                        src="https://cdn.discordapp.com/attachments/1025049974318305341/1224478870162509897/image.png?ex=661da3d0&is=660b2ed0&hm=ea957c4e8cfbd2862adb47d72f5c7b9c8796758f83b3641b2ae39ec2b5a55f48&"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="https://cdn.discordapp.com/attachments/1025049974318305341/1224478870560837662/image.png?ex=661da3d0&is=660b2ed0&hm=33fb1e8dc9780cf37fd8c6b40a792ad06315fd4382b3d78ce6fe2e24d04599e1&"
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />
                        <h3 className="mt-10 text-2xl leading-8 font-semibold">
                            Pour commander les dépliants
                        </h3>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                        Si vous êtes un adhérent : (insérer PDF ici)
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                        Si vous n'êtes pas un adhérent : (insérer PDF ici)
                        </p>
                    </dt>
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