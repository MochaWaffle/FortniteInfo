import vbuck from '../Images/vbuck.png'

export default function CardInfo({backgroundIMG, image, title, text, displayRarity, priceDifference, price}) {
    return (
        <>
        <div className="card" style={{backgroundImage: `url(${backgroundIMG})`}}>
            <div className="card-image" style={{ backgroundImage: `url(${image})`}}></div>
            <h2 className="cardTextColor">{title}</h2>
            <br />
            <p className="cardTextColor"><i>{text}</i></p>
            <p className="cardTextColor">Rarity: {displayRarity}</p>

            {priceDifference > 0 && 
                <div className="cardPriceText">
                    <br />
                    <img src={vbuck} alt="Vbuck Image."/>
                    <br />
                    {price} ({priceDifference} off!)
                </div>
            }
            
            {priceDifference <= 0 && 
                <div className="cardPriceText">
                    <img src={vbuck} alt="Vbuck Image."/>
                    <br />
                    {price}
                </div>
            }
        </div>
        </>
    )
}