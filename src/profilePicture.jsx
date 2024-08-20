import profilePhoto from './assets/ProfilePhoto.jpg';
function profilePicture ()
{
    const handl = (e) => {
        e.target.style.display = "none";
        console.log ("hello ");
     };
    return(
        <>
        
        <img src = {profilePhoto} alt =" hello hello "   onClick={(e)=>  handl(e)} />
        </>
         
    );

}
export default profilePicture;