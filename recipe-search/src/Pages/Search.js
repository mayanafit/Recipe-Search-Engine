import React, { useState } from 'react';
import Lottie from 'react-lottie';
import CookingAnimation from '../Lotties/22977-cooking-at-home-character.json';
import { BsSearch } from 'react-icons/bs';

const Search = (props) => {
    const [query, setQuery] = useState('')
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: CookingAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    const submitProcess = (e) => {
        e.preventDefault()
        const location = {
            pathname: `result/search?q=${query}`,
            state: {
                query
            }
        }
        props.history.push(location)
    }
    return (
        <section className="search">
            <div className="search__image">
                <Lottie 
                    options={defaultOptions}
                    height={250}
                    width={250}
                />
            </div>
            <div className="search__main">
                <h1>Recipe Finder</h1>
                <p>We'll help you decide what recipe you want to cook right now.</p>
                <div className="search__main__input">
                    <form onSubmit={(e) => submitProcess(e)}>
                        <div className="flex flex-jc-c flex-ai-c">
                            <BsSearch />
                            <input value={query} onChange={(e) => setQuery(e.target.value)} type="search" results="5" name="s" autoSave="true" placeholder="Fried rice"/><br/>
                        </div>
                        <button>Find</button>
                    </form>
                </div>
            </div>
        </section>
    )   
}

export default Search