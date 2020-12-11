import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  const emojiDictionary = {
    "😀": "Grinning Face",
    "😃": "Grinning Face with Big Eyes",
    "😄": "Grinning Face with Smiling Eyes",
    "😉": "Winking Face",
    "😊": "Smiling Face with Smiling Eyes",
    "😇": "Smiling Face with Halo",
    "😍": "Smiling Face with Heart-Eyes",
    "😘": "Face Blowing a Kiss",
    "😗": "Kissing Face",
    "😐": "Neutral Face",
    "😑": "Expressionless Face",
    "😶": "Face Without Mouth",
    "😏": "Smirking Face",
    "😒": "Unamused Face",
    "😬": "Grimacing Face",
    "😔": "Pensive Face",
    "😪": "Sleepy Face",
    "😴": "Sleeping Face",
    "😎": "Smiling Face with Sunglasses",
    "😕": "Confused Face",
    "😟": "Worried Face",
    "😮": "Face with Open Mouth",
    "😯": "Hushed Face",
    "😲": "Astonished Face",
    "😳": "Flushed Face",
    "😨": "Fearful Face",
    "😢": "Crying Face",
    "😖": "Confounded Face",
    "😣": "Persevering Face",
    "😞": "Disappointed Face",
    "😩": "Weary Face",
    "😫": "Tired Face",
    "😡": "Pouting Face",
    "😠": "Angry Face",
    "😈": "Smiling Face with Horns",
    "👿": "Angry Face with Horns",
    "💀": "Skull"
  };

  const emojis = Object.keys(emojiDictionary);

  function inputEmojiHandler(event) {
    let meaning = emojiDictionary[event.target.value];

    if (meaning === undefined) {
      meaning = "ye nahi pata bas!";
    }
    setEmojiMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    const meaning = emojiDictionary[emoji];
    setEmojiMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Search Emoji</h1>
      <input onChange={inputEmojiHandler}></input>
      <h2>{emojiMeaning}</h2>
      <div>
        {emojis.map((item, index) => {
          return (
            <span
              key={item}
              onClick={() => emojiClickHandler(item)}
              style={{ margin: "2rem", fontSize: "2rem", cursor: "pointer" }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
