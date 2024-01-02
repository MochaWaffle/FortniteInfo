import React from 'react'
import {useEffect, useState} from 'react'
import legendary_background from '../Images/legendary_background.jpg'
import epic_background from '../Images/epic_background.jpg'
import rare_background from '../Images/rare_background.png'
import uncommon_background from '../Images/uncommon_background.jpg'
import common_background from '../Images/common_background.jpg'
import StarWarsBackground from '../Images/StarWarsBackground.jpg'
import marvel_background from '../Images/marvel_background.png'
import icon_series_background from '../Images/icon_series_background.png'
import lava_background from '../Images/lava_background.png'
import shadow_background from '../Images/shadow_background.png'
import slurp_background from '../Images/slurp_background.png'
import frozen_background from '../Images/frozen_background.png'
import rocket_league_background from '../Images/rocket_league_background.png'
import transcendent_background from '../Images/transcendent_background.png'
import gaming_background from '../Images/gaming_background.png'
import dark_series_background from '../Images/dark_series_background.png'
import dc_series_background from '../Images/dc_series_background.png'
import lamborghini_background from '../Images/lamborghini_background.png'
import CardInfo from '../components/CardInfo'

export default function Shop() {
    const[shopEntries, setShopEntries] = useState([]);
    const[error, setError] = useState(null);
    
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
    }
    useEffect(() => {
        async function getShopData() {
            try {
                const response = await fetch('https://fortnite-api.com/v2/shop/br');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();

                setShopEntries(data?.data?.featured?.entries || [])
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
            }
        }

        getShopData();
    }, []);
    
    return (
        <>
        <div className="containerResize">
            <h1 className="shopTitle">Shop</h1>
            {error && <p className="errorText">Error fetching shop data in API.</p>}

            {!error && shopEntries.length === 0 && <p>Currently no shop data in API.</p>}

            {!error && shopEntries.length > 0 &&
                    <section className="cardContainer">
                        {shopEntries.map((entry) =>
                            
                            {if (entry.bundle !== null) {
                                    const rarity = entry.items[0]?.rarity?.value;
                                    const displayRarity = entry.items[0]?.rarity?.displayValue;
                                    let backgroundIMG = common_background;
                                    
                                    try {
                                        backgroundIMG = rarityBackground[rarity] 
                                    } catch (e) {
                                        backgroundIMG = common_background;
                                    }

                                    return (
                                        <React.Fragment key={entry.sectionId}>
                                            <CardInfo 
                                                backgroundIMG = {backgroundIMG}
                                                image = {entry.bundle.image}
                                                title = {entry.bundle.name}
                                                text = {entry.bundle.info}
                                                displayRarity = {displayRarity}
                                                priceDifference = {entry.regularPrice - entry.finalPrice}
                                                price = {entry.finalPrice}
                                            />
                                        </React.Fragment>
                                    )
                                } 
                            }
                        )}

                        {shopEntries.map((entry) =>
                            
                            {if (entry.bundle == null) {
                                    return (
                                            entry.items.map((item) => {
                                                    let backgroundIMG = common_background

                                                    try {
                                                        backgroundIMG = rarityBackground[item.rarity.value];
                                                    } catch(e) {
                                                        backgroundIMG = common_background;
                                                    }
                                                    return (
                                                        <React.Fragment key={item.id}>                             
                                                            <CardInfo 
                                                                backgroundIMG = {backgroundIMG}
                                                                image = {item.images.icon}
                                                                title = {item.name}
                                                                text = {item.description}
                                                                displayRarity = {item.rarity.displayValue}
                                                                priceDifference = {entry.regularPrice - entry.finalPrice}
                                                                price = {entry.finalPrice}
                                                            />
                                                        </React.Fragment>
                                                    )
                                                }
                                            )
                                    );
                                    
                                } 
                            }
                        )}
                </section>
            }
        </div>
        </>
    )
}