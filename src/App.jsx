import { useState } from 'react'
import './App.css'

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('🚀 Form Submitted Successfully!')
    console.log('Submitted Data:', form)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div style={styles.wrapper}>
      {/* Background Glow Shape */}
      <div style={styles.backgroundShape}></div>

      <h1 style={styles.heading}>📩 Contact Us</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          style={styles.textarea}
          required
        />
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </div>
  )
}

const styles = {
  wrapper: {
    fontFamily: `'Inter', sans-serif`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    justifyContent: 'center',
    background: 'linear-gradient(to right, #141e30, #243b55)',
    padding: '20px',
    position: 'relative',
    overflow: 'hidden',
    animation: 'fadeIn 0.6s ease-in-out',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: '600',
    marginBottom: '30px',
    color: '#ffffff',
    zIndex: 1,
  },
  form: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '100%',
    maxWidth: '400px',
    zIndex: 1,
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ffffff80',
    borderRadius: '8px',
    background: 'rgba(255, 255, 255, 0.15)',
    color: 'white',
    outline: 'none'
  },
  textarea: {
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ffffff80',
    borderRadius: '8px',
    resize: 'vertical',
    minHeight: '100px',
    background: 'rgba(255, 255, 255, 0.15)',
    color: 'white',
    outline: 'none'
  },
  button: {
    padding: '12px',
    fontSize: '16px',
    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    backgroundSize: '200% 200%',
    animation: 'gradientMove 3s ease infinite'
  },
  backgroundShape: {
    position: 'absolute',
    top: '-150px',
    left: '-100px',
    width: '600px',
    height: '600px',
    background: 'radial-gradient(circle at center, #667eea88, #764ba244)',
    borderRadius: '50%',
    filter: 'blur(100px)',
    zIndex: 0,
  }
}

export default App
