import React from 'react'
import {Suspense} from 'react'
import {useEffect, useState} from 'react'
import legendary_background from '../Images/legendary_background.jpg'
import epic_background from '../Images/epic_background.jpg'
import rare_background from '../Images/rare_background.jpg'
import uncommon_background from '../Images/uncommon_background.jpg'
import common_background from '../Images/common_background.jpg'
import StarWarsBackground from '../Images/StarWarsBackground.jpg'
import marvel_background from '../Images/marvel_background.jpg'
import icon_series_background from '../Images/icon_series_background.jpg'
import lava_background from '../Images/lava_background.jpg'
import shadow_background from '../Images/shadow_background.jpg'
import slurp_background from '../Images/slurp_background.jpg'
import frozen_background from '../Images/frozen_background.jpg'
import rocket_league_background from '../Images/rocket_league_background.jpg'
import transcendent_background from '../Images/transcendent_background.jpg'
import gaming_background from '../Images/gaming_background.jpg'
import dark_series_background from '../Images/dark_series_background.jpg'
import dc_series_background from '../Images/dc_series_background.jpg'
import lamborghini_background from '../Images/lamborghini_background.jpg'

const BundleDisplay = React.lazy(() => import('../components/BundleDisplay'));
const ItemDisplay = React.lazy(() => import('../components/ItemDisplay'));

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
        'transcendent': transcendent_background
    }
    useEffect(() => {
        async function getShopData() {
            setError(null)
            try {
                const response = await fetch('https://fortnite-api.com/v2/shop/br');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();

                setShopEntries(data?.data?.featured?.entries || [])
            } catch (error) {
                console.error('Error fetching data:', error);
                setError("An error occurred while retrieving shop data.");
            }
        }

        getShopData();
    }, []);
    

    return (
        <>
        <div className="containerResize">
            <h1 className="shopTitle">Shop</h1>
            {error && <p className="errorText">{error}</p>}

            {!error && shopEntries.length === 0 && <p>Currently no shop data in API.</p>}

            {!error && shopEntries.length > 0 &&
                    <section className="cardContainer">
                        
                        <Suspense fallback={<p>Loading...</p>}>
                            <BundleDisplay shopEntries={shopEntries} rarityBackground = {rarityBackground} />
                            <ItemDisplay shopEntries={shopEntries} rarityBackground = {rarityBackground} />
                        </Suspense>
                        
                </section>
            }
        </div>
        </>
    )
}