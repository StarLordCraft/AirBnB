import banner from './../assets/banner.png'

import './../styles/title.css'

export default function Bannertitle(){
    return(
        <section className="banner-title">
            <div className='banner'>
                <img src={banner} alt="" />
            </div>
            <div className="title">
                <h1>Online Experiences</h1>
                <p>
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </section>

    )
}