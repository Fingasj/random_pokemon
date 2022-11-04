
const PokemonCard = ({Pokemon}) => {
    return (
        <div>
            <h1 className="text-3xl font-bold underline"> Here is your Pokemon </h1>
            <div className="flex flex-col items-center">
                <img width="256" height="256" layout="fixed" className="animate-fade-in" src={Pokemon.sprites?.front_default} />
                <div className="text-2xl font-bold capitalize">
                    <div>Name: {Pokemon.name}</div>
                    <div>ID: {Pokemon.id}</div>
                    <div>Weight: {Pokemon.weight}</div>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard