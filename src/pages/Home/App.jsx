import { useEffect, useState, useRef } from 'react'
import Styles from './App.module.css'
import { FaTrash } from 'react-icons/fa';
import api from '../../services/api';



export default function App() {
  const [users, setUsers] = useState([])

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const ageInputRef = useRef(null);



  async function getUsers() {
    try {
      const usersFromApi = await api.get('/usuarios')
      setUsers(usersFromApi.data)
    } catch (error) {
      console.warn('Backend indisponível:', error.message)
    }
  }


  async function createUsers() {
    try {
      await api.post('/usuarios', {
        name: nameInputRef.current.value,
        email: emailInputRef.current.value,
        age: ageInputRef.current.value
      })
      getUsers()
    } catch (erro) {
      console.warn('Erro ao criar usuário (backend offline):', error.message)
    }
  }

  async function deleteUsers(id) {
    try {
      await api.delete(`/usuarios/${id}`)
      getUsers()
    } catch (error) {
      console.warn('Erro ao deletar usuário (backend offline):', error.message)
    }
  }


  return (

    <div className={Styles.container}>

      <section className={Styles.section}>
        <h1>User Registration</h1>
        <form>
          <input type="text" placeholder="username" ref={nameInputRef} />
          <br />
          <input type="email" placeholder="email" ref={emailInputRef} />
          <br />
          <input type="number" placeholder="age" ref={ageInputRef} />
          <br />
          <button type="button" onClick={createUsers}>Register</button>
        </form>
      </section>

      {users.map((user => (
        <div key={user.id}>
          <div className={Styles.userInfo}>
            <p>Name: <span> {user.name}</span></p>
            <p>Email: <span>{user.email}</span></p>
            <p>Age: <span>{user.age}</span></p>
            <button onClick={() => deleteUsers(user.id)} >
              <FaTrash style={{ color: 'red', fontSize: '24px' }} />
            </button>
          </div>

        </div>
      )))}



    </div>


  )
}


