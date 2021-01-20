import React from "react";
import "./Slides.css";
import Octicon, { MarkGithub } from "@primer/octicons-react";
// import { Lotties } from "../../subComponents";
// import LoaderRing from "../../assets/anim/loader-ring.json";

// const Slides = () => {
//   const [items, setItems] = useState([]);
//   const [isloading, setIsloading] = useState(false);

//   useEffect(() => {
//     setIsloading(true);
//     const url = "https: api.github.com/users/philippetedajo/repos";
//     fetch(url)
//       .then(res => res.json())
//       .then(data => {
//         setIsloading(false);
//         setItems(data);
//       });
//   }, []);

//   if (isloading) {
//     return (
//       <div className="mt-5">
//         <Lotties
//           animationData={LoaderRing}
//           lh="5vw"
//           lw="5vw"
//           mh="10vw"
//           mw="10vw"
//         ></Lotties>
//       </div>
//     );
//   } else {
//     return (
//       <div className="repos-container mt-5">
//         {items.map(repos => (
//           <a
//             style={{ color: "#333", textDecoration: "none" }}
//             href={repos.html_url}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <div href={repos.html_url} key={repos.node_id} className="repo">
//               <div className="repo-title">
//                 <p className="repo-name mt-3">{repos.name}</p>
//                 <p className="repo-description mt-2">{repos.description}</p>
//               </div>
//               <div className="repo-details">
//                 <div className="repo-details-items">
//                   <div className="details-items mr-3">
//                     <span className="mr-1">
//                       <Octicon icon={Star} />
//                     </span>
//                     <p className="repo-stars">{repos.stargazers_count}</p>
//                   </div>
//                   <div className="details-items mr-3">
//                     <span className="mr-1">
//                       <Octicon icon={RepoForked} />
//                     </span>
//                     <p className="repo-forks">{repos.forks_count}</p>
//                   </div>
//                   <span>
//                     <Octicon icon={MarkGithub} />
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </a>
//         ))}
//       </div>
//     );
//   }
// }
const Slides = () => {
  return (
    <div className="repos-container mt-5">
      <div className="repo">
        <div className="repo-title">
          <a href="https://edusavior.netlify.app/" className="repo-name mt-3"  >Edusavior (07/2020 - 08/2020)</a>
        </div>
        <p className="repo-description mt-2">
         - EduSavior is a free learning platform for education and skills
          training,High-quality education for everyone, everywhere
          <br/>
          <br/>
         - Languages & technologies Used : Html,Css,JavaScript,Node.js,MongoDb,REST API,React,Bootsrab,Sass</p>
        <div className="repo-details">
          <div className="repo-details-items">

            <a  className="github" href="https://github.com/edusavior/edusavior-frontEnd">
              <Octicon  icon={MarkGithub} />
            </a>
          </div>
        </div>
      </div>

      <div className="repo">
        <div className="repo-title">
          <a href="https://dev-home-404.herokuapp.com/" className="repo-name mt-3"  >DevHome (04/2020 - 04/2020)</a>
        </div>
        <p className="repo-description mt-2">
         - DevHome is a website for enriching Arabic content on the social network, the main goal of this site is to enable any Arab person to ask
          questions in Arabic, gain experience and learn about programming
          languages in all its forms without the need for deep knowledge of the English language
          <br/>
          <br/>

         - Languages & Technologies Used : Html,Css,JavaScript,Node.js,MongoDb,REST API
</p>
        <div className="repo-details">
          <div className="repo-details-items">

            <a className="github" href="https://github.com/404-teams/devHome" >
              <Octicon icon={MarkGithub} />
            </a>
          </div>
        </div>
      </div>
    </div>

    
  )
};

export default Slides;
