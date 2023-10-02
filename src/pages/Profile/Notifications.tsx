import styled from 'styled-components';
import { Switch as AntSwitch, SwitchProps as AntSwitchProps } from 'antd';
import { NotificationsContainer } from './Profile.styles';
import { ProfileAction } from './ProfileAction';
import { ReactComponent as ActivityIcon } from '../../assets/icons/activity.svg';
import { MdOutlineEmail } from 'react-icons/md';

const SwitchRoot = styled.div`
  padding: 9px 12px;
  display: flex;
  align-items: center;
`;

interface SwitchProps extends AntSwitchProps {
  label: string;
}
const Switch = ({ label, className = '', ...rest }: SwitchProps) => (
  <SwitchRoot className="mb-10">
    <AntSwitch className={`mr-10 ${className}`.trim()} {...rest} />
    <span>{label}</span>
  </SwitchRoot>
);

interface NotificationSectionProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}
const NotificationSection = (props: NotificationSectionProps) => {
  const { title, children, icon } = props;

  return (
    <div className="mb-20">
      <div className="mb-18">
        <span className="icon mr-14">{icon}</span>
        <span className="title">{title}</span>
      </div>
      {children}
    </div>
  );
};

const Notifications = () => {
  return (
    <NotificationsContainer className="pt-20">
      <NotificationSection icon={<ActivityIcon />} title="Activity">
        <Switch label="Email me when someone comments on my article" />
        <Switch label="Email me when someone answers on my forum thread" />
        <Switch label="Email me when someone follows me" />
      </NotificationSection>
      <NotificationSection
        icon={<MdOutlineEmail size={20} />}
        title="Application"
      >
        <Switch label="Email me when someone comments on my article" />
        <Switch label="Email me when someone answers on my forum thread" />
        <Switch label="Email me when someone follows me" />
      </NotificationSection>
      <ProfileAction />
    </NotificationsContainer>
  );
};

export { Notifications };
