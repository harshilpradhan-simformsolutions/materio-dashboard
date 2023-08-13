import { Avatar, Badge } from 'antd';
import { MdSearch, MdNotificationsNone } from 'react-icons/md';
import { HeaderRoot } from './Header.styles';
import { ReactComponent as DarkModeIcon } from '../../assets/icons/dark-mode.svg';
import flag from '../../assets/images/us-flag.png';
import avatar from '../../assets/images/avatar.png';

const Header = () => (
  <HeaderRoot className="header py-4 px-24">
    <span className="icon search pointer">
      <MdSearch size={24} />
    </span>
    <Avatar className="pointer" src={flag} />
    <span className="icon pointer">
      <DarkModeIcon />
    </span>
    <span className="icon pointer">
      <MdNotificationsNone size={24} />
    </span>
    <Badge dot color="green" offset={[-6, 33]}>
      <Avatar className="pointer" src={avatar} size="large" />
    </Badge>
  </HeaderRoot>
);

export default Header;
