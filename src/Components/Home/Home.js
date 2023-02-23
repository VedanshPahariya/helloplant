import React from 'react'
import './Home.css'
import homeImg from '../../images/home-img.jpg 2240w'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    const plantContainerPage = () => {
        navigate('/plants')
    }

    return (
        <div className='header-parent'>
            <div className='page-header'>
                <h2>
                    Best Indoor Plants and How to Care for Them
                </h2>
                <div className="header-desc">
                    <u>Brighten up your space with the best house plants that are low maintenance (aka, hard to kill). </u>
                </div>
            </div>
            <div className="home-img">
                <img src={homeImg} alt="" />
            </div>

            <div className="home-desc">
                <p>
                    Growing tired of a lifeless interior? Or maybe your room’s a blank canvas ready for its first dash of color. The best indoor plants can add just the right amount of intrigue—they’re free-form and organic yet clean and sculptural; they delight with their unpredictability yet reassure with their steady presence. And their life span, thankfully, is much longer than that of cut flowers. But when considering plants in a room’s design, there are a few things to take into account. Architectural Digest caught up with horticulturist Dennis Schrader from Landcraft Environments in Mattituck, New York, to get the dirt.
                </p>
                <p>
                    “You have to think of the container it’s going in like a piece of furniture,” Schrader says. “It should match the interior.” As for the plant, you’ll want to coordinate that as well. Below is a guide to some stellar finds and their respective requirements, but first, what if you choose to incorporate more than one plant into your design scheme? Schrader advises grouping plants the way they naturally grow. “You don’t want to put a fern next to a cactus,” he says. And what’s more, plants that grow together will have similar needs, making it easier on the caretaker. As for how many to include, he says, “That all depends on how many you want to take care of.”
                </p>
                <p>
                    Finally, location should be dictated primarily by the plant’s light requirements and then by the owner’s taste. Try a plant here or there and see what looks good to you, and don’t be afraid to move it around over time. For smaller indoor plants, Schrader says, “you can use them as a table setting, then move them to a window sill later on.”
                </p>
                <div className="btn-div">
                    <button className='plant-btn' onClick={plantContainerPage} >
                        Let's see plants together 
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Home