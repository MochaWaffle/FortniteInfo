import React from 'react'
import CardInfo from './CardInfo'
import unknownIMG from '../assets/Images/unknownIMG.jpg'

const MemoizedCardInfo = React.memo(CardInfo);
export default function BundleDisplay({shopEntries, rarityBackground}) {
    return (
        <>
            {shopEntries?.map((entry, index) =>
                                
                {if (entry.bundle !== null) {
                        const bundle = entry?.bundle;
                        const rarity = entry?.items[0]?.rarity?.value ?? 'common';
                        const displayRarity = entry?.items[0]?.rarity?.displayValue ?? 'N/A';
                        let priceDifference = 0;
        
                        if (entry?.regularPrice && entry?.finalPrice) {
                            priceDifference = entry.regularPrice - entry.finalPrice;
                        }
                        
                        return (
                           
                                <MemoizedCardInfo
                                    key = {entry?.id ?? index}
                                    backgroundIMG = {rarityBackground[rarity] || common_background}
                                    image = {bundle?.image ?? unknownIMG}
                                    title = {bundle?.name ?? 'Name: N/A'}
                                    text = {bundle?.info ?? 'Description: N/A'}
                                    displayRarity = {displayRarity}
                                    priceDifference = {priceDifference}
                                    price = {entry?.finalPrice ?? 'Price: N/A'}
                                />
                            
                        )
                    } 
                }
            )}
        </>
    )
}