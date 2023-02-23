import React from 'react'
import PlantContainer from './PlantContainer'
import one from '../../images/1.webp'
import two from '../../images/2.webp'
import three from '../../images/3.webp'
import four from '../../images/4.webp'
import five from '../../images/5.webp'
import six from '../../images/6.webp'
import seven from '../../images/7.webp'
import eight from '../../images/8.webp'
import nine from '../../images/9.webp'
import ten from '../../images/10.webp'
import eleven from '../../images/11.webp'
import twelve from '../../images/12.webp'
import thirteen from '../../images/13.webp'

const PlantContainerPage = () => {
    return (
        <div>
            <p style={{
                marginLeft: '35%',
                marginTop: '10px',
                fontSize: '20px'
            }}>
                Click On Images To Know More
            </p>
            <div className="row row-cols-1 row-cols-md-3 g-5" style={{
                margin: "5px",
            }} >
                <PlantContainer
                    img={one}
                    title={`Fiddle-Leaf Fig Tree`}
                    BinomialName={`Ficus Lyrata`}
                    desc={`This shrub boasts a long, elegant stem and branches with broad, leathery leaves. For placement, Schrader suggests “under a skylight or next to a window.” In other words, it needs as much sun as possible. Schrader suggests pruning the top branches when it grows above the window frame.`}
                    care={`Water once a week, or more if it’s winter and the air in your home is dry.`}
                />

                <PlantContainer
                    img={two}
                    title={"Split-Leaf Philodendron"}
                    BinomialName={`Monstera Deliciosa`}
                    desc={`Favored by Henri Matisse, this plant has a distinctive leaf that looks as though it’s been gently cut into by a careful hand. Schrader says you can cut off the top—as long as it has air roots attached—and replant it, meaning if you buy one of these, you could easily have more, if you’d like.`}
                    care={`Water once a week.`}
                />

                <PlantContainer
                    img={three}
                    title={"Meyer Lemon Tree"}
                    BinomialName={`Citrus X Meyeri`}
                    desc={`This tree bears its namesake Meyer lemons, believed to be a hybrid of lemons and mandarin oranges with a subtler, sweeter flavor than lemons. But these trees don’t stop at fruits: “When they bloom you have this beautiful fragrance of citrus flowers,” says Schrader. Meyer lemon trees do well indoors as long as they have lots of sun.`}
                    care={`Water weekly.`}
                />

                <PlantContainer
                    img={four}
                    title={"Kentia Palm"}
                    BinomialName={`Howea Forsteriana`}
                    desc={`The fronds of this plant spring to great heights from the soil, then lean forward, quietly shading the ground beneath. “It looks great in a big urn,” says Schrader, noting that it should be given lots of space, as it can grow up to 10 feet with a broad reach.`}
                    care={`Requires medium to bright light; water weekly.`}
                />

                <PlantContainer
                    img={five}
                    title={"Castiron Plant"}
                    BinomialName={`Aspidistra Elatior`}
                    desc={`Schrader says this plant is “mostly for foliage,” meaning if you’re looking to add a lush, dark green plant to your space, this one is for you. It does well in medium to low light and is tolerant of neglect, so it’s fine if you forget to water it once in a while.`}
                    care={`Water once a week or every ten days.`}
                />

                <PlantContainer
                    img={six}
                    title={"Amazon Lily"}
                    BinomialName={`Eucharis Amazonica`}
                    desc={`Another dark green plant, but this one features large, white flowers that bloom throughout winter and early spring. “Even when it’s not blooming, it’s nice to look at,” Schrader says. It thrives in medium light; allow soil to dry between watering.`}
                    care={`The leaves will wilt when it needs water, but once a week should suffice.`}
                />

                <PlantContainer
                    img={seven}
                    title={"Snake Plant"}
                    BinomialName={`Sansevieria Trifasciata`}
                    desc={`“I think they’re having a resurgence, especially for contemporary interiors,” says Schrader. With sword-shaped leaves winding gently from the soil like charmed snakes from a basket, this indoor house plant strikes a lovely balance between order and chaos.`}
                    care={`Place anywhere you’d like and let the soil dry completely between watering. Check the soil every week, but it’s fine to skip a few.`}
                />

                <PlantContainer
                    img={eight}
                    title={"African Spear Plant"}
                    BinomialName={`Sansevieria Cylindrica`}
                    desc={`“Very architectural, very sculptural,” says Schrader. Indeed, this plant’s conical leaves conjure images of spires, obelisks, and skyscrapers.`}
                    care={`Place in any light you choose; water every few weeks.`}
                />

                <PlantContainer
                    img={nine}
                    title={"Peruvian Apple Cactus"}
                    BinomialName={`Cereus Peruvianus`}
                    desc={`No matter what the weather looks like outside, a cactus will make you feel like you’re in a desert oasis at home. “Not only is it easy to care for, but with its upright sculptural nature, this architectural oddity always makes a large statement,” says Heibel. As the plant grows, it tends to shift toward the light. To balance it out, rotate the plant so it’s tilting away from the sun and then it will tilt back.`}
                    care={`Bright, indirect light is best, but the Peruvian apple cactus can also thrive in medium or full light. Water once a month.`}
                />

                <PlantContainer
                    img={ten}
                    title={"Winterbourn"}
                    BinomialName={`Philodendron Xanadu)`}
                    desc={`A smaller version of oversized tropical leaves—it will only grow to be about three to four feet—this textural plant is great for spaces with less light, says De Give.`}
                    care={`The winterbourn also prefers bright, indirect sunlight. Be careful not to overwater it. If the soil is dry, it’s safe to water it. If, however, it’s moist to the touch, give it a few days before watering. Snap off dead, yellow leaves as they appear.`}
                />

                <PlantContainer
                    img={eleven}
                    title={"Mistletoe Cactus"}
                    BinomialName={`Rhipsalis`}
                    desc={`De Give recommends looking for more unusual varieties of cactus plants, such as rhipsalis (pictured above), kalanchoe thyrsiflora, and aloe white beauty. Arrange them in a set of three or amass a larger collection. “Rhipsalis offers a welcomed textural change, compared to the sometimes controlled look of other succulents,” says Heibel`}
                    care={`This sturdy plant does best in indirect light, but it can survive in low light, as well—just make sure to bring it into the light every once in a while to help it recharge. Water weekly. If the tendrils ever droop, that’s a sign the plant is thirsty.`}
                />

                <PlantContainer
                    img={twelve}
                    title={"Asparagus Fern"}
                    BinomialName={`Asparagus Plumosa`}
                    desc={`While this indoor plant isn't technically a fern, says De Give, it still has those signature soft fronds. “It can be pruned back to almost look like a small ghostly tree, but with a mind of its own, you can also let it explore your space freely and watch its travels along the way,” says Heibel.`}
                    care={`he plant can handle partial to full sunlight and a varying water schedule. De Give advises keeping it lightly moist.`}
                />

                <PlantContainer
                    img={thirteen}
                    title={"Corn Plant"}
                    BinomialName={`Dracaena fragrans massangeana`}
                    desc={`Rounding out our list of the best indoor plants is this standout with striped leaves. This low-maintenance plant will look stunning in your living room, and grows up to four to six feet tall.`}
                    care={`Place this beauty in filtered sunlight and water every 7-10 days.`}
                />

            </div>
        </div>

    )
}

export default PlantContainerPage