import { useState } from 'react'
import './Main.css'
import image1 from '../Images/Me.jpg'
import Comments from './Comments'
import CommentForm from './CommentForm'

function Main() {
  const [comment, setComment] = useState([])

  const commentChange = (text) => {
    const newComment = {
      name: text.name,
      text: text.comment,
    }
    setComment([...comment, newComment])
  }
  return (
    <>
      <div className="pageNameMain">
        <h2>Главная страница</h2>
      </div>
      <div className="mainPage">
        <div className="pageText">
          <p>
            Привет! Меня зовут Михаил Агапов. Я изучаю Frontend разработку, и
            это мой первый сайт, на котором я расскажу немного о себе.
          </p>
          <p>
            Мне 30 лет, я родился и вырос в городе Казань, Республика Татарстан,
            но на данный момент проживаю в Турции, в городе Бурса.
          </p>
          <p>
            А дальше, для наполнения страницы, я добавлю 8 правил бойцовского
            клуба. Почему бы и нет?
          </p>
          <p>
            Первое правило Бойцовского клуба: никому не рассказывать о
            Бойцовском клубе.
          </p>
          <p>
            Второе правило Бойцовского клуба: никогда никому не рассказывать о
            Бойцовском клубе.
          </p>
          <p>
            Третье правило Бойцовского клуба: в схватке участвуют только двое.
          </p>
          <p>
            Четвертое правило Бойцовского клуба: не более одного поединка за
            один раз.
          </p>
          <p>
            Пятое правило Бойцовского клуба: бойцы сражаются без обуви и голые
            по пояс.
          </p>
          <p>
            Шестое правило Бойцовского клуба: поединок продолжается столько,
            сколько потребуется.
          </p>
          <p>
            Седьмое правило Бойцовского клуба : если противник потерял сознание
            или делает вид, что потерял, или говорит «Хватит» — поединок
            окончен.
          </p>
          <p>
            Восьмое и последнее правило Бойцовского клуба: новичок обязан
            принять бой.
          </p>
          <br />
        </div>
        <div className="pageImages">
          <img src={image1} alt="Фото" title="Портрет чб" width="100%" />
        </div>
      </div>
      <div className="commentForm">
        <CommentForm addChange={commentChange} />
        <Comments addComment={comment} />
      </div>
    </>
  )
}

export default Main
