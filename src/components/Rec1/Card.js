import './Home.css'
import {useState} from 'react'

const Card = ({ tilt, cardDiv, card }) => {

  const [top, setTop] = useState();
  const [left, setLeft] = useState();

  const handleDragStart = (event) => {
    event.dataTransfer.setData('text/plain', card.id);
    console.log(event.target)
    event.target.style.transform = 'rotate(3deg) scale(1.15)';
    event.target.style.boxShadow = '10px 0 40px -25px'

    setTop(event.clientY - event.target.x);
    setLeft(event.clientX - event.target.x);
    event.target.style.top = top+'px';
    event.target.style.left = left+'px';
  };
  const handleDragEnd = (event) => {
    event.target.style.transform = 'rotate(0deg)';
    event.target.style.left = '20px';
    event.target.style.boxShadow = '0 0 0 0'
  }
  const styles = {
    tiltCard:{
      transform:'rotate(3deg)'
    },
  }
  cardDiv === 'done' ? card.priority = 1 : cardDiv === 'todo' ? card.priority = 2
  : card.priority = 3;
  return (
    <div className="card"
      draggable
      onDragStart={handleDragStart}
      style={tilt === card.id ? styles.tiltCard : {}}
      onDragEnd={handleDragEnd}
    >
      { card.priority === 1 && <span className='complete-card-priority'>Complete</span> }
      { card.priority === 2 && <span className='high-card-priority'>High</span> }
      { card.priority === 3 && <span className='low-card-priority'>Low</span> }
      <div className='card-heading'>
        {card.head}
      </div>
        <p>
          {card.text}
        </p>
      <div className='images'>
        <img src='' />
      </div>
    </div>
  );
};

export default Card;
