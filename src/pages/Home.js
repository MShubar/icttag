import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

function Home() {
  const services = [
    {
      id: 1,
      name: 'NFC Watches',
      imageUrl:
        'https://nhfpro.com/wp-content/uploads/2023/10/67056e1d-32d0-4a83-add1-4c13861d80f7.jpg'
    },
    {
      id: 2,
      name: 'NFC Dog Collar',
      imageUrl: 'https://i.ebayimg.com/images/g/KYwAAOSwXs5gyRjS/s-l960.webp'
    },
    {
      id: 3,
      name: 'NFC Business Card',
      imageUrl:
        'https://preview.redd.it/dsbzr8thled71.png?width=500&format=png&auto=webp&s=de34dca24fe50fa573b7001f249ef05f6f401d83'
    },
    {
      id: 4,
      name: 'NFC Punch-In',
      imageUrl:
        'https://th.bing.com/th/id/OIP.mNMEuDUjwrTRCHD6CFduMAHaHa?rs=1&pid=ImgDetMain'
    },
    {
      id: 5,
      name: 'NFC Access Door',
      imageUrl:
        'https://res.cloudinary.com/kisi-kloud/image/upload/c_lfill,dpr_auto,f_auto,q_auto:good,w_2078/v1/products/access-methods/kisi-reader-pro-credentials-card'
    }
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change slides every 3 seconds
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>

      <Slider {...settings}>
        {services.map((service) => (
          <div
            key={service.id}
            className="service-card p-6 rounded-lg shadow-md text-center transition-all duration-300 transform hover:scale-105 slick-slide"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              margin: '0 10px' // Add margin to create a gap between the cards
            }}
          >
            <Link
              to={`/service${service.id}`}
              className="w-full"
              style={{ textDecoration: 'none' }}
            >
              <div
                className="service-image"
                style={{
                  backgroundImage: `url(${service.imageUrl})`,
                  height: '300px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  borderRadius: '8px',
                  position: 'relative'
                }}
              >
                <h2
                  className="text-2xl font-semibold text-white absolute bottom-4 left-1/2 transform -translate-x-1/2 mb-4"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '10px',
                    borderRadius: '4px'
                  }}
                >
                  {service.name}
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
      <br />
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12"></footer>
    </div>
  )
}

export default Home
