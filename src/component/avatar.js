import { Avatar } from '@mui/material';
import {React} from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';


const AvatarIcon=({className,postAvatar})=>{
    const user=useSelector(selectUser);
    function stringToColor(string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
      }
      
      function stringAvatar(name) {
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          
        };
      }
    return (
        postAvatar ? <Avatar className={className} {...stringAvatar(postAvatar)} > {postAvatar[0]}</Avatar> :
        <Avatar className={className} {...stringAvatar(user.email)}>{user.email[0]}</Avatar>
    )
}

export default AvatarIcon;