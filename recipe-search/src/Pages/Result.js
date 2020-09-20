import React, { useEffect, useState } from 'react';
import { CardTemp } from '../Components';
import { BsSearch } from 'react-icons/bs';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import LoadingAnimation from '../Lotties/25523-wok-pan-food-fry-on-fire.json';

const Result = (props) => {
    const [recipes, setRecipes] = useState('');
    const [loading, setLoading] = useState(false); 
    const [query, setQuery] = useState('');
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LoadingAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    useEffect(() => {
        const key = process.env.REACT_APP_KEY_API
        setLoading(true)
        setQuery(props.location.state.query)
        fetch(`https://recipe-puppy.p.rapidapi.com/?q=${props.location.state.query}&p=1`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
                "x-rapidapi-key": key
            }   
        })
        .then(response => response.json())
        .then(data => {
            const result = data.results
            setRecipes(result)
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [props.location.state.query])

    const submitQuery = (e) => {
        e.preventDefault()
        const location = {
            pathname: `/result/search?q=${query}`,
            state: {
                query
            }
        }
        props.history.push(location)
    }

    if (loading) return (
        <div className="center_position">
            <Lottie 
                options={defaultOptions}
                height={150}
                width={150}
                speed={2.5}
            />
        </div>
    )
    return (
        <section className="result">
            <div className="flex flex-fd-c flex-ai-c result__search">
                <Link className="result__logo" to="/"><h1>Recipe Finder</h1></Link>
                <div className="result__input">
                    <form onSubmit={(e) => submitQuery(e)}>
                        <div className="flex flex-jc-c flex-ai-c">
                            <BsSearch />
                            <input value={query} onChange={(e) => setQuery(e.target.value)} type="search" results="5" name="s" autoSave="true" placeholder="Fried rice"/><br/>
                        </div>
                    </form>
                </div>
            </div>
            <div className="result__data">
                {
                    recipes.length < 1 ? <h3 className="notFound">Sorry, we can't find any recipe.</h3> : recipes.map((recipe, index) => <CardTemp key={index} recipe={recipe} />)
                }
            </div>
        </section>
    )
}

export default Result