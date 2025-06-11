import { useState } from 'react'
import './App.css'

function App() {
  const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Form Submitted!\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`)
        console.log('Submitted Date: ', form)
        setForm({name: '', email: '', message: ''})
    }

  return (
    <div style={styles.container}>
        <h1>Contact Form</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
            <input
            type='text'
            name='name'
            placeholder='Enter Your Name: '
            value={form.name}
            onChange={handleChange}
            style={styles.input}
            required
            />

            <input
            type='email'
            name='email'
            placeholder='Enter Your Email: '
            value={form.email}
            onChange={handleChange}
            style={styles.input}
            required
            />

            <input
            name='message'
            placeholder='Enter Your Message: '
            value={form.message}
            onChange={handleChange}
            style={styles.textarea}
            required
            />
            <button type='submit' style={styles.button}>Submit</button>
        </form>
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '60px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '300px',
    margin: '0 auto'
  },
  input: {
    padding: '10px',
    fontSize: '16px'
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    height: '100px'
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '5px'
  }
};

export default App
