import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
                <div className="container mx-auto">
                    <NoteCard 
                        title="Judul 1" 
                        date="12 January 2023" 
                        content="haloo"
                        tags="#Meeting"
                        isPinned={true}
                        onEdit={() => {}}
                        onDelete={() => {}}
                        onPinNote={() => {}}
                    />
                    
                </div>


            <AddEditNotes />
        </>
    );
};

export default Home;
