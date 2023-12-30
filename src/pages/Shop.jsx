import {useEffect, useState} from 'react'

export default function Shop() {
    const[shopData, setShopData] = useState([])

    useEffect(() => {
        async function getShopData() {
            try {
                const response = await fetch('https://fortnite-api.com/v2/shop/br');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();

                setShopData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setShopData([]);
            }
        }

        getShopData();
    }, []);
    
       
    return (
        <>
        <div className="containerResize">
            <h1 className="shopTitle">Shop</h1>
            {shopData.length == 0 && <p>Could not retrieve shop data.</p>}
        </div>
        </>
    )
}