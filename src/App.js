import { useEffect, useState } from "react";
import './App.css'
import { fetchAvatar,fetchQuote } from "./fetch";
import Card  from "./card";

function calculateSpaceBelowViewport() {
  const viewportHeight = window.innerHeight;
  const scrollPosition = document.documentElement.scrollTop;
  const documentHeight = document.documentElement.offsetHeight;

  const spaceBelowViewport = documentHeight - (scrollPosition + viewportHeight);

  return spaceBelowViewport;
}

async function addPost(post, setPost) {
  let data = await fetchQuote();
  let ava = await fetchAvatar();
  if (data == false)
    return false;

  data=[...data,...ava];
  setPost(([...post]) => [...post, data]);
  return true;
}


function App() {
  const [post, setPost] = useState([]);

  useState(() => {
    setInterval(() => {
      if (calculateSpaceBelowViewport() < 2000) {
        addPost(post, setPost);
      }
    }, 200);
  }, [])

  return (
    <>
      <div id="container">
        <div id="notch" >Quatify</div>
        {
          post.map((e) => <Card author={e[0]} quote={e[1]} username={e[2]} avatar={e[3]} />)
        }
        <div id="loading" >Loading...</div>
      </div>
    </>
  );
}

export default App;