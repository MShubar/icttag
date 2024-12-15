import React, { useState } from 'react'

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission with a timeout
    setTimeout(() => {
      console.log('Form submitted: ', formData)
      setIsLoading(false)
      setIsSubmitted(true)
      setFormData({ email: '', password: '' }) // Reset form data
    }, 2000)
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

  return (
    <div>
      <h2 className="text-center my-4">Sign In</h2>

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
        </div>
      ) : isSubmitted ? (
        <div style={loadingStyle}>You have successfully signed in!</div>
      ) : (
        <form onSubmit={handleSubmit} style={formStyle}>
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

          <label style={labelStyle}>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Enter your password"
            required
          />

          <button type="submit" style={buttonStyle}>
            Sign In
          </button>
        </form>
      )}
    </div>
  )
}

export default SignIn
