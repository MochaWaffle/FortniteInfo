import React from 'react'
import CardInfo from './CardInfo'
import unknownIMG from '../Images/unknownIMG.jpg'

const MemoizedCardInfo = React.memo(CardInfo);

export default function ItemDisplay({shopEntries, rarityBackground}) {
    return (
        <>
            {shopEntries?.map((entry) =>
                                
                {if (entry.bundle == null) {
                        return (
                                entry?.items?.map((item, itemIndex) => {
                                        let priceDifference = 0;
        
                                        if (entry?.regularPrice && entry?.finalPrice) {
                                            priceDifference = entry.regularPrice - entry.finalPrice;
                                        }
        
                                        return (
                                                                        
                                                <MemoizedCardInfo
                                                    key = {item?.id ?? itemIndex}
                                                    backgroundIMG = {rarityBackground[item?.rarity?.value] ?? common_background}
                                                    image = {item?.images?.icon ?? unknownIMG}
                                                    title = {item?.name ?? 'Name: N/A'}
                                                    text = {item?.description ?? 'Description: N/A'}
                                                    displayRarity = {item?.rarity?.displayValue ?? 'N/A'}
                                                    priceDifference = {priceDifference}
                                                    price = {entry?.finalPrice ?? 'Price: N/A'}
                                                />
                                            
                                        )
                                    }
                                )
                        );
                        
                    } 
                }
            )}
        </>
    )
    
}