import instImg from '../Images/instagram.png'
import twitImg from '../Images/twitter.png'
import linkImg from '../Images/linkedin.png'
import gitImg from '../Images/github.png'

import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerImg">
        <img className="instImg" src={instImg} alt="" />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/jack_be_goon.ner/"
        >
          Instagram
        </a>
      </div>
      <div className="footerImg">
        <img className="twitImg" src={twitImg} alt="" />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/Jack_be_goon_er"
        >
          Twitter
        </a>
      </div>
      <div className="footerImg">
        <img className="linkImg" src={linkImg} alt="" />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/mikhail-agapov-9335b3269/"
        >
          LinkedIn
        </a>
      </div>
      <div className="footerImg">
        <img className="gitImg" src={gitImg} alt="" />
        <a target="_blank" rel="noreferrer" href="https://github.com/Goon-ner">
          GitHub
        </a>
      </div>
    </div>
  )
}

export default Footer

// <a href="https://www.flaticon.com/ru/free-icons/instagram" title="instagram иконки">Instagram иконки от Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/ru/free-icons/" title="твиттер иконки">Твиттер иконки от Enamo Studios - Flaticon</a>
// <a href="https://www.flaticon.com/ru/free-icons/github" title="github иконки">Github иконки от Dave Gandy - Flaticon</a>
// <a href="https://www.flaticon.com/ru/free-icons/linkedin" title="linkedin иконки">Linkedin иконки от riajulislam - Flaticon</a>
