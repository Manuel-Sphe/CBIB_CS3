import React from "react";

const ProfileDetailsContext = React.createContext();

const ProfileDetailsProvider = ({children}) => {
    const [name, setName] = React.useState('Jose');
    const [surname, setSurname] = React.useState(' Patricio');
    const [title, setTitle] = React.useState('Prof ');
    const [groupName, setGroupName] = React.useState('Knowledge Representation and Reasoning (KRR)');
    const [university, setUniversity] = React.useState('University of Cape Town');
    const [bio, setBio] = React.useState('');
    const [email, setEmail] = React.useState('jose.p@cair.org.za');  

    return(
        <ProfileDetailsContext.Provider value={{
            name, setName, surname, setSurname, title, setTitle, groupName, setGroupName, university, setUniversity, bio, setBio, email, setEmail 
        }}>
            {children}
        </ProfileDetailsContext.Provider>
    )
}

export {ProfileDetailsContext, ProfileDetailsProvider} 