import "./style.css";
import ChatIcon from '@mui/icons-material/Chat';
import { Link } from "react-router-dom";
export default function RightHome({ user }) {
  
  return (
    <div className="right_home">
      <div className="heading">Sponsored</div>
      <div className="contacts_wrap">
        <div className="contacts_header">
          <div className="contact hover3">
            <div className="contact_img">
              <img src={user.picture} alt="" />
            </div>
            <span>
              {user.first_name} {user.last_name}
            </span>
          
          </div>
          <div className="mess hover3">
          <Link to="/messenger">
            <ChatIcon />

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
