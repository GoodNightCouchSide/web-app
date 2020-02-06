import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Moment from 'react-moment';
import eventListImage from 'assets/img/gncs_eventlist_img.jpg'
import {Link} from 'react-router-dom';

const EventList = ({ eventList }) => {

  if (eventList.length === 0) return null
  return <Col className="event-list">
    <h1>krasse shows</h1>
    {eventList.map(event => (
      <div key={event._id}>
        <Row>
          <div className="event-list-date">
            <Moment format="DD.MM.YYYY">
              {Array.from(new Set([].concat.apply(event.date))).join(', ')}
            </Moment>
            </div>
        </Row>
        <Link to={"/EventDetail/"+event._id}>
          <div className="list-event">
          <Row>

            <Col xs={12} md={2}>
              <div className="event-list-img">
                <img src={eventListImage} alt='default event list logo'/>
              </div>
            </Col>
            <Col xs={12} md={5}>
            <h2>{event.name === event.headliner ? event.name : (event.name+event.headliner) }</h2>


              <ul>any
                {event.support.map((support, index, array) => (
                  <li key={`support-list-${index}`}>{support} {index === array.length - 1 ? '' : '-'}</li>
                ))}
              </ul>
            </Col>
            <Col xs={12} md={3}>
              <h2>{event.venue}</h2>
              <Moment format="HH:mm | DD.MM.YYYY">any
                    {event.date}
                </Moment>

            </Col>
            <Col xs={12} md={2}>
              <h2>{event.entrance}</h2>
              <p>{Array.from(new Set([].concat.apply([], event.artist_details.map((item) => item.genres)))).join(', ')}</p>
            </Col>
            </Row>
            </div>
          </Link>
      </div>
    ))}
  </Col>
}

export default EventList;
