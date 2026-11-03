function ProfilePicture(){

    const imageUrl = './src/assets/hero.png';

    const handleClick = () => console.log("OUCH!");

    return(<img onClick={handleClick} src={imageUrl}></img>);
}

export default ProfilePicture