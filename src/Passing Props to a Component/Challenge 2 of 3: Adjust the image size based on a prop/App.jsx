import { getImageUrl } from './utils.js';

function Avatar(props) {
    let sizeAvatar = 'b'
  if(props.size < 90){
    sizeAvatar = 's'
  }
  return (
    <img
      className="avatar"
      src={getImageUrl(props.person, sizeAvatar)}
      alt={props.person.name}
      width={props.size}
      height={props.size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={40}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}
