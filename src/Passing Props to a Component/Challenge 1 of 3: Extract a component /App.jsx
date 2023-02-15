import { getImageUrl } from "./Utils.jsx";

const Profile = (props) => {
  return (
    <section className="profile">
      <h2>{props.name}</h2>
      <img
        className="avatar"
        src={getImageUrl(props.imageId)}
        alt={props.name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession:</b> {props.profession}
        </li>
        <li>
          <b>Awards: {props.number} </b>{props.text}
        </li>
        <li>
          <b>Discovered: </b>
          {props.discovered}
        </li>
      </ul>
    </section>
  );
};

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        imageId="szV5sdG"
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        number="4"
        text="Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,
        Matteucci Medal"
        discovered="polonium (element)"
      />
      <Profile
       imageId="YfeOqp2"
       name="Katsuko Saruhashi"
       profession="geochemist"
       number="2"
       text="Miyake Prize for geochemistry, Tanaka Prize"
       discovered="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}



// import { getImageUrl } from "./utils.js";

// const Profile = ({props}) => {
//   return (
//     <section className="profile">
//       <h2>{name}</h2>
//       <img
//         className="avatar"
//         src={getImageUrl(props.imageId)}
//         alt={props.name}
//         width={70}
//         height={70}
//       />
//       <ul>
//         <li>
//           <b>Profession:</b> {props.profession}
//         </li>
//         <li>
//           <b>Awards: {props.number} </b>({props.text})
//         </li>
//         <li>
//           <b>Discovered: </b>
//           {props.discovered}
//         </li>
//       </ul>
//     </section>
//   );
// };

// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <Profile
//         imageId="szV5sdG"
//         name="Maria Skłodowska-Curie"
//         profession="physicist and chemist"
//         number="4"
//         text="Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,
//         Matteucci Medal"
//         discovered="polonium (element)"
//       />
//       <Profile
//        imageId="YfeOqp2"
//        name="Katsuko Saruhashi"
//        profession="geochemist"
//        number="2"
//        text="Miyake Prize for geochemistry, Tanaka Prize"
//        discovered="a method for measuring carbon dioxide in seawater"
//       />
//     </div>
//   );
// }
