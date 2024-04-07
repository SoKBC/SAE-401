import React from 'react';
import Carouselforum from './Carousel1.js';

export default function Forum () {

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
                    
                    <p className="mt-2 text-3xl font-bold mb-20 tracking-tight text-gray-900 sm:text-4xl text-center">
                        Forum des Associations Franco-Italien
                    </p>
                    <section>
                        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                            <div className="mr-auto place-self-center lg:col-span-7">
                                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-8 text-gray-900">Forum des associations italiennes virtuel : APIRP 2020</h1>
                                <p className="max-w-2xl mb-6 font-light text-lg leading-8 text-gray-600 lg:mb-8">Le forum des associations franco-italiennes initialement prévu place Baudoyer à Paris, se déroulera cette année de façon virtuelle le 20 et 21 juin 2020. L' APIRP participera avec une intervention de Olivier Morin et Ilaria Madonna, président et vice-présidente de l'association, le samedi 20 juin de 16h30 à 16h50. Pour l'occasion Ilaria Madonna a créé un padlet pour illustrer les projets menés par l'APIRP, intitulé APIRP 2020. Vous y trouverez des renseignements sur la diffusion de l'enseignement de l'italien dans les trois académies franciliennes, des documents pour la promotion de notre belle langue, une vidéo pour présenter le bilan des activités de l'APIRP de cette année, le dossier ESABAC, le programme du concours de recrutement ainsi que des projets menés par nos adhérents. Voici le lien :  <u><a href="https://padlet.com/apirpassociation/apirp2020" >https://padlet.com/apirpassociation/apirp2020</a></u>

                                <br></br>L'intégralité du forum sera retransmise sur la page Facebook du Forum des Associations italiennes.  </p>
                            </div>
                            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
                                <img src="https://cdn.discordapp.com/attachments/1025049974318305341/1226314532079669300/image.png?ex=66245168&is=6611dc68&hm=6542fd29bf3b79400f9e7400d1fc451239137db582c032aeca928154238838bb&" alt="Di Necessita Virtuale" className="rounded-lg" />
                            </div>                
                        </div>
                    </section>
                    <Carouselforum />
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
 
