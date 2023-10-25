import './App_DC.css'
import ContentSection from './components/Content_section'
import HorizontalScrollableImageCards from './components/Horizontal_scrollable_cards'
import avat from './assets/avat.jpeg'
import AvatarGrid from './components/AvatarGrid'
import mapImg from './assets/map.png'

function Body() {

    const userAvatarData = [
        { id: 1, name: 'User 1', imageUrl: avat },
        { id: 2, name: 'User 2', imageUrl: avat },
        { id: 2, name: 'User 2', imageUrl: avat },
        { id: 2, name: 'User 2', imageUrl: avat },
        { id: 2, name: 'User 2', imageUrl: avat },
        { id: 2, name: 'User 2', imageUrl: avat },
        { id: 2, name: 'User 2', imageUrl: avat },
        { id: 2, name: 'User 2', imageUrl: avat },
        { id: 2, name: 'User 2', imageUrl: avat },
        { id: 2, name: 'User 2', imageUrl: avat },
        { id: 2, name: 'User 2', imageUrl: avat },
        { id: 2, name: 'User 2', imageUrl: avat },
        // Add more users here
    ];

    return (
        <div className="parent-app-body">
            <div className="app-body">
                <ContentSection title="What is DC?" desc="A designer is anyone who applies design thinking in any of the daily life processes. Lawyers, psychologists, builders, engineers, cleaners, planters are all part of the community. They share their knowledge and application of design thinking in their fields and learn together."></ContentSection>

            </div>
            <HorizontalScrollableImageCards cat="category1"></HorizontalScrollableImageCards>
            <div className="app-body">
                <p className="what-we-do">Sketch Walk</p>
            </div>
            <HorizontalScrollableImageCards cat="category2"></HorizontalScrollableImageCards>
            <div className="app-body">
                <p className="what-we-do">Community Meetups</p>
            </div>
            <HorizontalScrollableImageCards cat="category3"></HorizontalScrollableImageCards>
            <div className="app-body">
                <ContentSection title="Who Is A Designer?" desc="A designer is anyone who applies design thinking in any of the daily life processes. Lawyers, psychologists, builders, engineers, cleaners, planters are all part of the community. They share their knowledge and application of design thinking in their fields and learn together."></ContentSection>
                <p className="what-we-do">People of DC</p>
                <AvatarGrid data={userAvatarData}></AvatarGrid>
                <ContentSection title="How can you be a part of the community" desc="You can simply walk-in to our spaces or activities that are announced in the social media handle."></ContentSection>
                <div className="location" >
                    <a href="https://maps.app.goo.gl/xFzgcVxYrAKdJXUi9?g_st=ic">
                        <img className='map-img' src={mapImg} alt="" />
                    </a>
                    <p>Designer’s Community
                        Parvathy Mangalam,
                        opp. Ramambika Devi Kshetram,
                        Vellayambalam</p>
                </div>
            </div>
        </div>
    )
}

export default Body