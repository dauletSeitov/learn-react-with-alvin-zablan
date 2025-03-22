const StateInfo = ({state}) => {


    return (
        <div>
            <div className="flex">
                <img src={state.image} className="w-64 mr-4 border border-zinc-200 rounded-md" />
                <div className="flex flex-col">
                    <h1 className="mb-2 text-3xl">{state.name}</h1>
                    <div className="flex m-1">
                        <div className="w-24 font-medium">Nickname</div>
                        <div>{state.nickname}</div>
                    </div>
                    <div className="flex m-1">
                        <div className="w-24 font-medium">Population</div>
                        <div>{state.population.toLocaleString()}</div>
                    </div>
                </div>
            </div>
            <p className="my-6 leading-relaxed">{state.description}</p>
        </div>
    )

}

export default StateInfo