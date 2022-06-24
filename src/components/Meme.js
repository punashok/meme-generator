import React from "react";

export default function Meme() {
    
    /* let [url,setUrl] = React.useState('https://i.imgflip.com/1bhw.jpg');
    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setUrl(prevUrl => memesArray[randomNumber].url);
    } */



    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        url:'https://i.imgflip.com/1bij.jpg'
    })

    const [allMemes, setMemes] = React.useState([])
    
    

    React.useEffect(async function () {
        fetch("https://api.imgflip.com/get_memes")
            .then(resp => resp.json())
            .then(data => setMemes(data.data.memes))
    },[])


    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                url:allMemes[randomNumber].url
            }
        });
        console.log(meme)
    }
    function handleChange(e) {
        const { name, value } = e.target
        
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]:value
            }
        })
    }
    return (
        <main>
            <form className="form">
                <input
                    type="text"
                    className="form--input"
                    placeholder="Top Text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}                    
                    
                />
                <input
                    type="text"
                    className="form--input"
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}                    
                />
                
                <button 
                    onClick={getMemeImage}
                    type="button"
                    className="form--button">
                    Get a new meme image
                </button>
            </form>
            <div className="meme">

                <img src={meme.url} alt="Meme" className="meme--image" />
                <h2 className="meme--text top">
                    {meme.topText}
                </h2>
                <h2 className="meme--text bottom">
                    {meme.bottomText}
                </h2>
            </div>
        </main>
    )
} 

