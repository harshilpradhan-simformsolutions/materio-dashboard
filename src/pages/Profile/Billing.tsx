import { Label } from '../../components/antd/Label';
import { Flex, Grid } from '../../layouts/utils';
import { BillingContainer } from './Profile.styles';
import { ProfileAction } from './ProfileAction';

import { ReactComponent as User } from '../../assets/icons/user.svg';
import { ReactComponent as Cloud } from '../../assets/icons/cloud.svg';
import { ReactComponent as Support } from '../../assets/icons/support.svg';
import { Button, Input, Tag } from 'antd';
import { RadioGroup } from '../../components/antd/RadioGroup';

const Billing = () => {
  return (
    <BillingContainer className="pt-20">
      <Grid className="mb-20" columns="2fr 1fr" gap={24}>
        <div>
          <RadioGroup
            className="mb-24"
            label="Payment Method"
            options={[
              { label: 'Credit/Debit/ATM Card', value: 'card' },
              { label: 'COD/Cheque', value: 'cod' },
            ]}
          />
          <Input placeholder="Name" className="mb-24" />
          <Input placeholder="Card" className="mb-24" />
          <Flex className="mb-24" gap={24}>
            <Input placeholder="Expiry Date" />
            <Input placeholder="CVV" />
          </Flex>
        </div>
        <Flex
          gap={16}
          align="flex-start"
          direction="column"
          className="current-plan start p-20"
        >
          <h2 className="price-header">Your Current Plan</h2>
          <Tag className="primary" bordered={false}>
            Basic Plan
          </Tag>
          <Label icon={<User />}>5 Users</Label>
          <Label icon={<Cloud />}>10 GB Storage</Label>
          <Label icon={<Support />}>Basic Support</Label>
          <Button type="primary" block>
            Save Changes
          </Button>
        </Flex>
      </Grid>
      <ProfileAction />
    </BillingContainer>
  );
};

export { Billing };
