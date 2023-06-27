function Card(props) {
    return (
      <>
        <div id="card">
  
          <div id="user"><img src={props.avatar} alt="asdf" />
            <span id="username">{props.username}</span>
          </div>
          <blockquote id="quote">&ldquo;{props.quote}.&rdquo;</blockquote>
          <p id="author">{props.author}</p>
        </div>
      </>
    );
  }

export default Card;