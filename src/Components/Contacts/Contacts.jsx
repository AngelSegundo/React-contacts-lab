import './Contacts.css'
import contacts from '../../contacts.json'
import { useState } from 'react'

const Contacts = () => {

    const newContacts = contacts.slice(0, 5)

    const [contactsList, setContactsList] = useState(newContacts)

    const addNewContact = () => {
        const max = contacts.length - 1
        const min = 5

        const randomNum = Math.floor((Math.random() * (max - min + 1)) + min)
        const randomContact = contacts[randomNum]

        let newContactsArray = [...contactsList, randomContact]

        setContactsList(newContactsArray)
    }

    const sortByName = () => {
        const newContacs = [...contactsList]
        const sortContactByName = newContacs.sort((a, b) => a.name > b.name ? 1 : -1, 0)
        setContactsList(sortContactByName)
    }


    const sortByPopularity = () => {
        const newContacs = [...contactsList]
        const sortContactByPop = newContacs.sort((a, b) => b.popularity - a.popularity, 0)
        setContactsList(sortContactByPop)
    }

    const deleteContact = (contactId) => {
        const newContacs = [...contactsList]
        const filteredContacts = newContacs.filter(contact => contact.id !== contactId)
        setContactsList(filteredContacts)
    }

    return (
        <div className='contactsBox'>
            <div>
                <button onClick={() => addNewContact()}>Add New Random Contacts</button>
                <button onClick={() => sortByName()}>Sort Contacts by Name</button>
                <button onClick={() => sortByPopularity()}>Sort Contacts by Popularity</button>
            </div>
            <table className='box'>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Won Oscar</th>
                        <th>Won Emmy</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                {
                    contactsList.map(eachContact => {
                        return (
                            < tr key={eachContact.id}>
                                <td><img className='img' src={eachContact.pictureUrl} alt='photo'></img></td>
                                <td>{eachContact.name}</td>
                                <td>{eachContact.popularity.toFixed(2)}</td>
                                <td>{eachContact.wonOscar ? <p>🏆</p> : null}</td>
                                <td>{eachContact.wonEmmy ? <p>🏆</p> : null}</td>
                                <td><button onClick={() => deleteContact(eachContact.id)}>Delete</button></td>
                            </tr>

                        )
                    })
                }
            </table>

        </div >

    )

}

export default Contacts

