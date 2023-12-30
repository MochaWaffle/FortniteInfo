import {useEffect, useState} from 'react'

export default function Shop() {
    const[shopData, setShopData] = useState([])
    const[shopEntries, setShopEntries] = useState([])

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
    
    console.log(shopData);
    return (
        <>
        <div className="containerResize">
            <h1 className="shopTitle">Shop</h1>
            {shopData.length == 0 && <p>Could not retrieve shop data.</p>}
            {shopEntries.map((entries, index) =>
                
                {if (entries.bundle !== null) {
                    return (
                        <>
                            <br />
                            <p key={index}>Bundle {index}: {entries.bundle.name}</p>
                            <p>Image: {entries.bundle.image} </p>
                            <p> Price: {entries.finalPrice} ({entries.regularPrice - entries.finalPrice} off!)</p>

                            {/* {entries.items.map((item, index) =>
                                <>
                                    <p key={index}> Item: {item.name}</p>
                                    <p> Item Description: {item.description}</p>
                                    <p>Item Rarity: {item.rarity.displayValue}</p>
                                    <p>Item Image: {item.images.icon}</p>
                                </>
                            )} */}
                        </>
                    )
                } else {
                    return (
                        <>
                            
                            {entries.items.map((item, index) =>
                                <>
                                    <br />
                                    <p key={index}> Item: {item.name}</p>
                                    <p> Item Description: {item.description}</p>
                                    <p> Item Price: {entries.finalPrice} ({entries.regularPrice - entries.finalPrice} off)</p>
                                    <p>Item Rarity: {item.rarity.displayValue}</p>
                                    <p>Item Image: {item.images.icon}</p>
                                </>
                            )}
                        </>
                    );
                }}
                 
            )}
        </div>
        </>
    )
}