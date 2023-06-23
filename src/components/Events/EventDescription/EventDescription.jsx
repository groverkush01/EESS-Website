import React from 'react'
import GlassContainer from '../../UI/GlassContainer/GlassContainer';

import './EventDescription.css'

const EventDescription = ({event}) => {
    return (
        <div id="EventDescription">
            <GlassContainer>
                {event.Heading}
                {event.description}
            </GlassContainer>
        </div>
    )
}

export default EventDescription;
