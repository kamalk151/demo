import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import teamImgThree from '../../Assets/images/team/3.jpg'
import teamImgFour from '../../Assets/images/team/4.jpg'
import teamImgTwo from '../../Assets/images/team/2.jpg'
import teamImgEight from '../../Assets/images/team/8.jpg'

const OurTeam = () => {
  const teamMembers = [
    {
      image: teamImgThree,
      name: 'Weir Doe',
      role: 'Property Consultant',
      description:
        'Carbon emissions reductions giving, legitimize amplify non-partisan Aga Khan. Policy dialogue assessment expert free-speech cornerstone disruptor freedom.',
    },
    {
      image: teamImgFour,
      name: 'Nix Maxwell',
      role: 'Director / License',
      description:
        'Eradicate invest honesty human rights accessibility theory of social change. Diversity experience in the field compassion, inspire breakthroughs planned.',
      social: [
        { icon: 'fa-solid fa-tree', link: '#', bg: 'bg-forrst' },
        { icon: 'fa-brands fa-skype', link: '#', bg: 'bg-skype' },
        { icon: 'fa-brands fa-flickr', link: '#', bg: 'bg-flickr' },
      ],
    },
    {
      image: teamImgTwo,
      name: 'Piff Jenkins',
      role: 'Senior Property Manager',
      description:
        'Carbon emissions reductions giving, legitimize amplify non-partisan Aga Khan. Policy dialogue assessment expert.',
    },
    {
      image: teamImgEight,
      name: 'Pelican Steve',
      role: 'Office Administrator',
      description:
        'Eradicate invest honesty human rights accessibility theory of social change.',
      social: [
        { icon: 'fa-solid fa-tree', link: '#', bg: 'bg-forrst' },
        { icon: 'fa-brands fa-skype', link: '#', bg: 'bg-skype' },
        { icon: 'fa-brands fa-flickr', link: '#', bg: 'bg-flickr' },
      ],
    },
  ]

  return (
    <div className="our-team my-5">
      <Container>
        {/* Heading Section */}
        <div className="heading-block border-0 mw-100 text-start mb-5">
          <h2 className="fw-semibold fs-3 mb-3">Our Team</h2>
          <p className="text-muted fs-6">
            Rerum morbi wisi purus illum, dolor consectetuer nulla, iusto eveniet? Fuga rem inventore
            scelerisque, wisi, hac illo wisi iste platea natus ante anim augue convallis. Lacinia
            laoreet mus quisque repellat.
          </p>
          <div className="divider"></div>
        </div>

        {/* Team Members Section */}
        <Row className="g-4">
          {teamMembers.map((member, index) => (
            <Col md={6} key={index}>
              <div className="team team-list d-flex align-items-start">
                {/* Team Image */}
                <div className="team-image me-4">
                  <img src={member.image} alt={member.name} className="img-fluid rounded shadow-sm" />
                </div>

                {/* Team Description */}
                <div className="team-desc">
                  <div className="team-title">
                    <h4 className="fw-bold mb-1">{member.name}</h4>
                    <span className="text-muted">{member.role}</span>
                  </div>
                  <div className="team-content mt-3">
                    <p className="text-muted">{member.description}</p>
                  </div>
                  {member.social && (
                    <div className="d-flex mt-3">
                      {member.social.map((social, idx) => (
                        <a
                          key={idx}
                          href={social.link}
                          className={`social-icon rounded-circle si-small text-white ${social.bg} me-2`}
                        >
                          <i className={social.icon}></i>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default OurTeam