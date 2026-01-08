
import Styles from './App.module.css'
import { FaTrash } from 'react-icons/fa';



export default function App() {

  const users = [{
    id: '12434asdaa',
    name: 'John Doe',
    age: 28,
    email: 'jon@gmail.com'
  },
  {
    id: '124wr233aa',
    name: 'Aline Doe',
    age: 22,
    email: 'aline@gmail.com'
  }
  ]

  return (

    <div className={Styles.container}>

      <section className={Styles.section}>
        <h1>User Registration</h1>
        <form>
          <input type="text" placeholder="username" />
          <br />
          <input type="email" placeholder="email" />
          <br />
          <input type="number" placeholder="age" />
          <br />
          <button type="button">Register</button>
        </form>
      </section>

         {users.map((user => (
        <div key={user.id}>
          <div className={Styles.userInfo}>
            <p>Name: <span> {user.name}</span></p>
            <p>Email: <span>{user.email}</span></p>
            <p>Age: <span>{user.age}</span></p>
            <button>
            <FaTrash style={{ color: 'red', fontSize: '24px' }} />
          </button>
          </div>
          
        </div>
      )))}


   
    </div>


  )
}


