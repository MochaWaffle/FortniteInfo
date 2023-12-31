import {useEffect, useState} from 'react'
import legendary_background from '../Images/legendary_background.jpg'
import epic_background from '../Images/epic_background.jpg'
import rare_background from '../Images/rare_background.png'
import uncommon_background from '../Images/uncommon_background.jpg'
import common_background from '../Images/common_background.jpg'
import StarWarsBackground from '../Images/StarWarsBackground.jpg'
import marvel_background from '../Images/marvel_background.gif'
import icon_series_background from '../Images/icon_series_background.gif'
import lava_background from '../Images/lava_background.gif'
import shadow_background from '../Images/shadow_background.png'
import slurp_background from '../Images/slurp_background.png'
import frozen_background from '../Images/frozen_background.png'
import rocket_league_background from '../Images/rocket_league_background.png'
import transcendent_background from '../Images/transcendent_background.png'
import gaming_background from '../Images/gaming_background.gif'
import dark_series_background from '../Images/dark_series_background.gif'
import dc_series_background from '../Images/dc_series_background.gif'
import lamborghini_background from '../Images/lamborghini_background.png'
import white_background from '../Images/white_background.jpg'

export default function Shop() {
    const[shopData, setShopData] = useState([])
    const[shopEntries, setShopEntries] = useState([])
    const[shopBundle, setShopBundle] = useState([])
    const[shopItems, setShopItems] = useState([])
    const rarityColor = {
        'legendary': '#A7581F',
        'icon': '#18858C',
        'epic': '#612D99',
        'rare': '#1B64A2',
        'uncommon': '#31731B',

    }
    const rarityBackground = {
        'starwars': StarWarsBackground,
        'legendary': legendary_background,
        'epic': epic_background,
        'rare': rare_background,
        'uncommon': uncommon_background,
        'common': common_background,
        'icon': icon_series_background,
        'marvel': marvel_background,
        'dc': dc_series_background,
        'gaming': gaming_background,
        'dark': dark_series_background,
        'frozen': frozen_background,
        'shadow': shadow_background,
        'slurp': slurp_background,
        'lamborghini': lamborghini_background,
        'lava': lava_background,
        'rocketleague': rocket_league_background,
        'transcendent': transcendent_background,
        'marvel': marvel_background
    }
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
    
    console.log(shopEntries);
    return (
        <>
        <div className="containerResize">
            <h1 className="shopTitle">Shop</h1>
            {shopData.length == 0 && <p>Could not retrieve shop data.</p>}

            <section className="cardContainer">
                {shopEntries.map((entries) =>
                    
                    {if (entries.bundle !== null) {
                        const rarity = entries.items[0]?.rarity?.value;
                        const backgroundIMG = rarityBackground[rarity] || white_background;

                        return (
                            <>
                                
                                <div key={entries.bundle.sectionId} className="card" style={{backgroundImage: `url(${backgroundIMG})`}}>
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
                                        <div className="card" style={{backgroundImage: `url(${rarityBackground[item.rarity.value]})`}}>
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