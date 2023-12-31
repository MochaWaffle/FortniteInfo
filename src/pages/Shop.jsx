import {useEffect, useState} from 'react'

export default function Shop() {
    const[shopData, setShopData] = useState([])
    const[shopEntries, setShopEntries] = useState([])
    const[shopBundle, setShopBundle] = useState([])
    const[shopItems, setShopItems] = useState([])

    useEffect(() => {
        async function getShopData() {
            try {
                const response = await fetch('https://fortnite-api.com/v2/shop/br');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();

                setShopData(data);
                setShopEntries(data.data.featured.entries)
            } catch (error) {
                console.error('Error fetching data:', error);
                setShopData([]);
            }
        }

        getShopData();
    }, []);
    
    //console.log(shopData);
    console.log(shopEntries);
    return (
        <>
        <div className="containerResize">
            <h1 className="shopTitle">Shop</h1>
            {shopData.length == 0 && <p>Could not retrieve shop data.</p>}

            <section className="cardContainer">
                {shopEntries.map((entries, index) =>
                    
                    {if (entries.bundle !== null) {
                        return (
                            <>
                                {/* <div key={index}>
                                    <br />
                                    <p>Bundle {index}: {entries.bundle.name}</p>
                                    <p>Image: {entries.bundle.image} </p>
                                    <p> Price: {entries.finalPrice} ({entries.regularPrice - entries.finalPrice} off!)</p>
                                </div> */}

                                <div className="card">
                                    <div className="card-image" style={{ backgroundImage: `url(${entries.bundle.image})`}}></div>
                                    <h2 className="cardTextColor">{entries.bundle.name}</h2>
                                    <p className="cardTextColor">{entries.bundle.info}</p>

                                    {entries.regularPrice - entries.finalPrice > 0 && 
                                        <a href="">{entries.finalPrice} ({entries.regularPrice - entries.finalPrice} off!)</a>
                                    }
                                    
                                    {entries.regularPrice - entries.finalPrice <= 0 && 
                                        <a href="">{entries.finalPrice}</a>
                                    }
                                </div>
                            </>
                        )
                    } else {
                        return (
                            <>
                                {entries.items.map((item) =>
                                    <>
                                        {/* <div key={index}>
                                            <br />
                                            <p> Item: {item.name}</p>
                                            <p> Item Description: {item.description}</p>
                                            <p> Item Price: {entries.finalPrice} ({entries.regularPrice - entries.finalPrice} off)</p>
                                            <p>Item Rarity: {item.rarity.displayValue}</p>
                                            <p>Item Image: {item.images.icon}</p>
                                        </div> */}
                                        
                                        <div className="card">
                                            <div className="card-image" style={{ backgroundImage: `url(${item.images.icon})`}}></div>
                                            <h2 className="cardTextColor">{item.name}</h2>
                                            <p className="cardTextColor">{item.description}</p>

                                            {entries.regularPrice - entries.finalPrice > 0 &&
                                                <a href="">{entries.finalPrice} ({entries.regularPrice - entries.finalPrice} off!)</a>
                                            }
                                            
                                            {entries.regularPrice - entries.finalPrice <= 0&&
                                                <a href="">{entries.finalPrice}</a>
                                            }
                                        </div>
                                        
                                    </>
                                )}
                            </>
                        );
                    }}
                )}
            </section>
        </div>
        </>
    )
}