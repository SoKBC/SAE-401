import React from 'react';

export default function Enseigner () {

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
            Comment devenir enseignant ?
          </p>
        
        <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
                La première étape, pour devenir enseignant, est avoir une licence (Bac+3).  Dès la licence, des parcours ou options de préparation aux métiers de l'enseignement sont proposés aux étudiants qui désirent s'engager dans cette voie.

        La deuxième étape est de vous inscrire en master MEEF (métiers de l’enseignement, de l’éducation et de la formation), qui comporte plusieurs mentions : premier degré (professeur des écoles), second degré (enseignant du secondaire), encadrement éducatif (conseiller principal d’éducation). Les différents concours auxquels vous aurez accès permettent d’enseigner dans le premier degré (écoles maternelles et primaires) ou dans le secondaire (collèges et lycées), dans le public ou dans le privé.

        La première année du master MEEF est surtout axée sur la préparation du concours de recrutement, qui a lieu à la fin de l’année, mais il faudra valider également la deuxième année car l’obtention du diplôme est indispensable pour exercer le métier.

        Ces masters sont organisés par les ESPE (écoles supérieures du professorat et de l’éducation) au sein des universités.

        À noter que les universités et instituts catholiques proposent aussi des masters MEEF, tout indiqués si vous envisagez une carrière de professeur dans le privé.

        Au programme de tous ces concours : deux épreuves écrites d’admissibilité et deux épreuves orales (une mise en situation professionnelle et un entretien).

        Si tout se passe bien (vous êtes admis au concours et vous avez décroché votre M1), vous poursuivez vos études en seconde année de MEEF (si vous échouez au M1 mais pas au concours, vous gardez le bénéfice du concours une année).

        En cas d’échec au concours, vous avez la possibilité de le repasser ou vous pouvez envisager une réorientation dans un autre master (au niveau M1 ou M2 selon que vous avez réussi ou non vos examens).

        La seconde année du master MEEF est considérée comme une année de formation en alternance : les étudiants deviennent fonctionnaires stagiaires et suivent des cours à l’ESPE tout en effectuant un stage en responsabilité équivalant à un mi-temps devant les élèves. Durant cette période, les enseignants stagiaires sont rémunérés entre 1.600 € et 1.700 € brut par mois.
        </p>

        <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
        <br></br>Pour en savoir davantage :
        <u><a href="http://www.devenirenseignant.gouv.fr/pid33985/enseigner-au-college-ou-au-lycee-general-le-capes.html">http://www.devenirenseignant.gouv.fr/pid33985/enseigner-au-college-ou-au-lycee-general-le-capes.html</a></u>
        </p>
        
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