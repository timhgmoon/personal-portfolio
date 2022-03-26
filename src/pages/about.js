import * as React from 'react';
import * as aboutStyles from './about.module.css';
import Container from 'react-bootstrap/Container';

const About = () => {
  const containerClass = `d-flex flex-column justify-content-center px-5 ${aboutStyles.background}`
  return(
    <Container className={containerClass} fluid>
          <p>
          HI THERE, I'M
          </p>
          <p className={aboutStyles.name}>
            Tim Moon
          </p>
          <p className={aboutStyles.jobTitle}>
            Software Engineer
          </p>
          <p className={aboutStyles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mi risus, viverra sed tellus a, scelerisque pulvinar justo. Aliquam vel mauris non sapien pretium consectetur. Ut pulvinar, nisi et placerat vestibulum, purus eros elementum eros, sit amet varius eros dui ut elit. Curabitur fringilla dui non nunc ullamcorper ultrices sit amet ac purus. Sed malesuada pulvinar urna eget iaculis. Nullam hendrerit ex suscipit semper maximus. Suspendisse venenatis sem non scelerisque convallis. Mauris ut aliquam enim. Donec aliquam elit sapien, quis rutrum felis sagittis non.
          </p>
    </Container>
  )
}

export default About