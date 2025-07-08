import React from 'react';
import {MdOutlinePushPin} from 'react-icons/md';

const NoteCard = ({
    title,
    date, 
    content,
    tags,
    isPinned,
    onEdit, 
    onDelete,
    onPinNote
}) => {
    return (
        <div>
            <div>
                <div>
                    <h6>{title}</h6>
                    <span>{date}</span>
                </div>

                <MdOutlinePushPin onClick={onPinNote}/>
            </div>

            <p>{content?.slice(0,60)}</p>

            <div>
                <div>{tags}</div>
                <div>
                    <MdCreate className="icon-btn hover:text-green-600" onClick={onEdit}/>
                    <MdDelete className="icon-btn hover:text-red-500" onClick={onDelete}/>
                </div>
            </div>
        </div>
    )

}

export default NoteCard;