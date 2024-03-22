const NftCard = ({ image, id, title, address, description, attributes }) => {
    return (
        <div className="w-1/4 mr-3 mb-4 bg-black rounded-md">
            <img className='w-full rounded-t-md' src={image} alt={`${title} NFT`} loading="lazy"></img>
            <div className="p-3">
                <div className="flex mb-3">
                    <div className="flex-grow">
                        <h3 className="text-xl text-white">{title}</h3>
                        <p className="text-white">{`${id.slice(0, 4)}...${id.slice(id.length - 4)}`}</p>
                    </div>
                    <div className="flex mr-3">
                        <a target="_blank" rel="noopener noreferrer" className="text-blue-400" href={`https://etherscan.io/token/${address}`}>{`${address.slice(0, 4)}...${address.slice(address.length - 4)}`}</a>
                    </div>
                </div>
                <p className="text-white">{description ? description.slice(0, 200) : "No Description"}</p>
            </div>
            <div className="flex flex-wrap justify-center items-center p-3">
                {attributes?.length > 0 && attributes.map((attribute, index) => {
                    return (
                        <div key={index} className="w-1/2 mb-2 flex justify-start flex-col">
                            <p className="mr-2 font-bold text-white">{attribute.trait_type}:</p>
                            <p className="text-sm text-white">{attribute.value}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default NftCard;
