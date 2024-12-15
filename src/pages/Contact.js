import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false) // State to track loading
  const [isSubmitted, setIsSubmitted] = useState(false) // State to track submission success

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Set loading to true when form is submitting
    setIsLoading(true)

    // Simulate a network request or form submission
    setTimeout(() => {
      console.log('Form submitted: ', formData)
      setIsLoading(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' }) // Reset form data
    }, 2000) // Simulate 2 seconds delay for submission
  }

  const formStyle = {
    width: '80%',
    maxWidth: '600px',
    margin: 'auto',
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
  }

  const labelStyle = {
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  }

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem'
  }

  const buttonStyle = {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }

  const loadingStyle = {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#007bff',
    marginTop: '20px'
  }

  const contactInfoStyle = {
    textAlign: 'center',
    marginTop: '2rem',
    fontSize: '1.2rem'
  }

  return (
    <div>
      <h2 className="text-center my-4">Contact Us</h2>

      {isLoading ? (
        <div style={loadingStyle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 600"
            preserveAspectRatio="xMidYMid meet"
            width="70"
            height="70"
            style={{ marginRight: '10px' }} // Add spacing between SVG and text
          >
            <ellipse
              cx="300"
              cy="300"
              rx="140"
              ry="280"
              fill="none"
              stroke="#0000FF"
              strokeWidth="10"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 300 300"
                to="360 300 300"
                dur="6s"
                repeatCount="indefinite"
              />
            </ellipse>
            <ellipse
              cx="300"
              cy="300"
              rx="140"
              ry="280"
              fill="none"
              stroke="#0000FF"
              strokeWidth="10"
              transform="rotate(60 300 300)"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="60 300 300"
                to="420 300 300"
                dur="6s"
                repeatCount="indefinite"
              />
            </ellipse>
            <ellipse
              cx="300"
              cy="300"
              rx="140"
              ry="280"
              fill="none"
              stroke="#0000FF"
              strokeWidth="10"
              transform="rotate(-60 300 300)"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="-60 300 300"
                to="300 300 300"
                dur="6s"
                repeatCount="indefinite"
              />
            </ellipse>

            <text
              x="300"
              y="350"
              fontFamily="Arial, sans-serif"
              fontSize="120"
              fontWeight="bold"
              fill="#FFFFFF"
              textAnchor="middle"
            >
              TAG ICT
            </text>
          </svg>
        </div> // Show loading message
      ) : isSubmitted ? (
        <div style={loadingStyle}>Your message has been sent!</div> // Show success message after submission
      ) : (
        <form onSubmit={handleSubmit} style={formStyle}>
          <label style={labelStyle}>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Enter your full name"
            required
          />

          <label style={labelStyle}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Enter your email"
            required
          />

          <label style={labelStyle}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Enter your phone number"
            required
          />

          <label style={labelStyle}>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ ...inputStyle, height: '150px' }}
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit" style={buttonStyle}>
            Send Message
          </button>
        </form>
      )}

      <div style={contactInfoStyle}>
        <p>
          <strong>Email:</strong> contact@yourwebsite.com
        </p>
        <p>
          <strong>Phone:</strong> +1 234 567 890
        </p>
      </div>
    </div>
  )
}

export default Contact
