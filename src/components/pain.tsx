const features = [
    {
        name: 'Ein auf Krankheit fokussiertes “Gesundheitssystem“',
        description: 'Fokus auf Gesundheitsförderung und Prävention zur Entlastung des kurativen Systems'
    },
    {
        name: 'Weder Zeit noch Vergütung für sprechende Medizin',
        description:'Nutzung bereits etablierter Vergütungsmodelle & Schaffung von Win-Win-Situationen'
    },
    {
        name: 'Unzureichende interprofessionelle Zusammenarbeit',
        description: 'Vernetzung bereits etablierter Akteure und Teillösungen'
    },
    {
        name: 'Ein undurchsichtiger Dschungel an Präventionsleistungen & Handlungsempfehlungen',
        description:'DER interaktive Guide zur Etablierung & Aufrechterhaltung eines gesunden Lebenstils'
    },
    {
        name: 'One-fits-all Ansatz anstelle individueller Lösungen',
        description: 'Individuell-ganzheitlicher & somit nachhaltiger Ansatz'
    },
    {
        name: 'mangelnde Gesundheitskompetenz & Selbstwirksamkeit der Bürger:innen',
        description: 'Förderung von individueller Gesundheitskompetenz & Selbstwirksamkeit'
    },
]

export default function Pain() {
    return (
        <div className="bg-white py-24 sm:py-32 bg-gradient-to-b from-prevery-50 to-white md:m-20 rounded-2xl">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl lg:mx-0">
                    <h2 className="font-asap text-3xl font-normal tracking-tight text-gray-900 sm:text-4xl">Pain Points & Solutions</h2>
                    <p className="font-varela mt-6 text-lg leading-8 text-gray-600">
                        Um das kurative Gesundheitssystem zu entlasten, ist eine Verschiebung hin zur Gesundheitsförderung und eine bessere Vernetzung im Gesundheitssektor nötig. Individuelle & ganzheitliche Ansätze sollten standardisierte Lösungen ersetzen.
                    </p>
                </div>
                <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {features.map((feature) => (
                        <div key={feature.name}>
                            <dt className="font-asap font-semibold text-gray-900">{feature.name}</dt>
                            <dd className="font-varela mt-1 text-gray-600">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
