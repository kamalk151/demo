import React from 'react'
import { Card, ListGroup, Image, Button } from 'react-bootstrap'
import userImg from '../../../Assets/real-estate/images/user.jpg'

const ReviewList = () => {
  const reviews = [
    {
      id: 1,
      author: 'Max Conversion',
      avatar: userImg,
      date: 'October 31, 2021 at 1:10 am',
      content:
        "Canvas is an extremely beautiful and well-coded template. I can pretty much customize it to meet any of my needs as a designer. Thank you guys so much for doing this. Please keep adding more stunning themes and animations. You're making the web a much more beautiful place.",
      rating: 5,
      replies: [
        {
          id: 3,
          author: 'P. Robert',
          avatar: userImg,
          date: 'October 31, 2021 at 1:16 am',
          content: 'Thank you so much. I am really glad that you like our template.',
        },
      ],
    },
    {
      id: 2,
      author: 'Hilary Ouse',
      avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      date: 'June 21, 2021 at 1:03 am',
      content:
        "I don't think I'll be using any other templates from now on. It's perfect. Great, fast responsive support. Super flexible, easy to customize. One warning: If you don't know any code, it's not for you. If you know your code, then this is SOOO good :) Thank you SemiColon team. Most excellent job.",
      rating: 4.5,
    },
    {
      id: 3,
      author: 'AL3XL',
      avatar: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y',
      date: 'April 25, 2021 at 1:03 am',
      content:
        'Awesome quality, highly structured. The detailed documentation is included, but it is all clear from just looking into the code. Comes with free updates. This purchase makes perfect sense to save you an immense amount of time. Thank you.',
      rating: 5,
    },
  ]

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const halfStar = rating % 1 !== 0
    const stars = []

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="bi-star-fill text-warning"></i>)
    }

    if (halfStar) {
      stars.push(<i key="half" className="bi-star-half text-warning"></i>)
    }

    return stars
  }

  return (
    <div className="comments mt-5">
      <h3>Reviews</h3>
      <ListGroup variant="flush">
        {reviews.map((review) => (
          <ListGroup.Item key={review.id} className="border-bottom">
            <Card className="border-0">
              <Card.Body className="d-flex">
                <Image
                  src={review.avatar}
                  alt={review.author}
                  roundedCircle
                  width={60}
                  height={60}
                  className="me-3"
                />
                <div>
                  <Card.Title className="mb-1">
                    {review.author}{' '}
                    <small className="text-muted">{review.date}</small>
                  </Card.Title>
                  <Card.Text>{review.content}</Card.Text>
                  <div className="d-flex align-items-center">
                    <div className="me-3">{renderStars(review.rating)}</div>
                    <Button variant="link" className="">
                      <i className="bi-reply-fill"></i> Reply
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
            {review.replies && (
              <ListGroup variant="flush" className="ms-5">
                {review.replies.map((reply) => (
                  <ListGroup.Item key={reply.id} className="border-0">
                    <Card className="border-0">
                      <Card.Body className="d-flex">
                        <Image
                          src={reply.avatar}
                          alt={reply.author}
                          roundedCircle
                          width={40}
                          height={40}
                          className="me-3"
                        />
                        <div>
                          <Card.Title className="mb-1">
                            {reply.author}{' '}
                            <small className="text-muted">{reply.date}</small>
                          </Card.Title>
                          <Card.Text>{reply.content}</Card.Text>
                          <Button variant="link" className="">
                            <i className="bi-reply-fill"></i> Reply
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}

export default ReviewList