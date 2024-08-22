import { TLiveSection } from '@/app/types/app'
import Image from 'next/image'
import React from 'react'

type LiveSectionCardProps = TLiveSection

const LiveSectionCard = ({ img, title }: LiveSectionCardProps) => {
    return (
        <div>
            <div className=' relative h-40 w-40'>
                <Image src={img} alt='title' fill />
            </div>
            <p>{title}</p>
        </div>
    )
}

export default LiveSectionCard