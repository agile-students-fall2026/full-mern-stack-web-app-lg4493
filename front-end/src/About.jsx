import { Link } from 'react-router-dom'
import './About.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {

  const jsonData = {
    "name": "Levi",
    "imgUrl": "https://s.9021007.xyz/f/profile58ec6e15f0d42eb4481ba75bc?download",
    "bio": "Hi, my name is Levi, and I'm a Computer Science student at NYU. I've always been fascinated by computers, and I have had a lot of fun learning about them. I'm a junior, and just transferred from another college in Los Angeles. Quite the distance! I'm really enjoying New York, though maybe not the cold. Feel free to say hi any time.\n\nThis website runs a stack called \"MERN\", meaning MongoDB, Express.js, React.js, and Node.js. It is a common and modern stack for websites, and is very useful to know. I've modified this project to add this about page, including this very paragraph. I hope you like it!"
  }




  return (
    <>
      <h1>About Me</h1>
      <h2>{jsonData.name}</h2>
      <img src={jsonData.imgUrl} alt="Profile Picture" height="200px" />
      {jsonData.bio.split("\n").map((paragraph) => (
        <><p>{paragraph}</p><br /></>
      ))}
    </>
  )
}

// make this component available to be imported into any other file
export default About
