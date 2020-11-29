import React from 'react'
import RoomsPage from '../../pages/RoomsPage/RoomsPage'
import Room from '../Room/room.component'
export default function RoomsList({rooms}) {
    if(rooms.lenght==0)return(<div className="empty-search">
        there is no room with this options
    </div>)
    return (
        <section className="rooms-list">
            <div className="roomslist-center">
                {rooms.map(item=>{
                    return <Room key={item.id} room={item} ></Room>
                })}

            </div>
        
        </section>
    )
}
