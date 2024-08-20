import profilePhoto from './assets/ProfilePhoto.jpg';

function card ()
{
    return(

        <div className="Card">
            <img src={profilePhoto} alt="Profile Picture " />
            <h2>BHB BHB</h2>
            <p>I am Business Man and as Profession I am a software Engineering</p>
        </div>

    );
}
export default card;