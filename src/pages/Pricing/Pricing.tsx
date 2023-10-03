import { useState } from 'react';
import { Button, Collapse, Switch, Tag } from 'antd';

import { Flex } from '../../layouts/utils';
import { PricingBase } from './Pricing.styles';
import { ReactComponent as DotIcon } from '../../assets/icons/dot.svg';
import { Label } from '../../components/antd/Label';

import basic from '../../assets/images/basic.png';
import standard from '../../assets/images/standard.png';
import enterprise from '../../assets/images/enterprise.png';
import trial from '../../assets/images/trial.png';
import { Expand } from '../../components/Icons';

type Billing = 'month' | 'year';

interface PricingCardProps {
  plan: string;
  description: string;
  image: string;
  billing: Billing;
  amount: number;
  isCurrentPlan?: boolean;
  benefits: string[];
  isPopular?: boolean;
}
const PricingCard = (props: PricingCardProps) => {
  const {
    isCurrentPlan,
    amount,
    benefits,
    image,
    plan,
    description,
    billing,
    isPopular,
  } = props;
  const style = {
    cursor: isCurrentPlan ? 'default' : 'pointer',
  };
  const className = isCurrentPlan ? 'success' : '';
  const text = isCurrentPlan ? 'Your Current Plan' : 'Upgrade';
  const type = isCurrentPlan ? 'default' : 'primary';
  const multiplier = billing === 'month' ? 1 : 12;

  return (
    <div className=" p-24 pricing-card br-6">
      {isPopular && (
        <Tag className="pricing-card__popular primary">Popular</Tag>
      )}
      <img src={image} className="pricing-card__image mb-20" />
      <h2 className="pricing-card__plan mb-6">{plan}</h2>
      <p>{description}</p>
      <div className="pricing-card-plan m-20">
        <span className="text-primary pricing-card-plan__amount">
          <span className="currency">$</span>
          {amount * multiplier}
        </span>
        <span className="duration">/{billing}</span>
      </div>
      {benefits.map((benefit, i) => (
        <Label className="label" key={i} icon={<DotIcon />}>
          {benefit}
        </Label>
      ))}
      <Button style={style} type={type} className={className} block>
        {text}
      </Button>
    </div>
  );
};

const Pricing = () => {
  const [yearlyBilling, setYearlyBilling] = useState(false);
  const billing = yearlyBilling ? 'year' : 'month';

  return (
    <PricingBase className="mx-24">
      <div className="pricing py-80">
        <h1 className="pricing-header mb-10">Pricing Plans</h1>
        <p>
          All plans include 40+ advanced tools and features to boost your
          product.
        </p>
        <p className="mb-10">Choose the best plan to fit your needs.</p>
        <Flex gap={8} className="p-8 mb-48" justify="center">
          <span>Monthly</span>
          <Switch
            checked={yearlyBilling}
            onChange={() => setYearlyBilling(!yearlyBilling)}
          />
          <span>Annually</span>
        </Flex>
        <Flex gap={24} justify="center" align="stretch">
          <PricingCard
            billing={billing}
            amount={0}
            plan="Basic"
            description="A simple start for everyone"
            image={basic}
            isCurrentPlan
            benefits={[
              '100 responses a month',
              'Unlimited forms and surveys',
              'Unlimited fields',
              'Basic form creation tools',
              'Up to 2 subdomains',
            ]}
          />
          <PricingCard
            isPopular
            billing={billing}
            amount={49}
            plan="Standard"
            description="For small to medium businesses"
            image={standard}
            benefits={[
              'Unlimited responses',
              'Unlimited forms and surveys',
              'Instagram profile page',
              'Google Docs integration',
              'Custom “Thank you” page',
            ]}
          />
          <PricingCard
            billing={billing}
            amount={99}
            plan="Enterprise"
            description="Solution for big organizations"
            image={enterprise}
            benefits={[
              'PayPal payments',
              'Logic Jumps',
              'File upload with 5GB storage',
              'Custom domain support',
              'Stripe integration',
            ]}
          />
        </Flex>
      </div>
      <div className="trial">
        <h1 className="text-primary mb-10 fw-500 fs-24">
          Still not convinced? Start with a 14-day FREE trial!
        </h1>
        <p className="fs-14">
          You will get full access to with all the features for 14 days.
        </p>
        <Button className="mt-40" type="primary">
          Start 14-day free trial
        </Button>
        <img src={trial} alt="Trial" />
      </div>
      <div className="faq">
        <div className="faq-head pb-24 mb-24">
          <h1 className="fw-400 fs-24 mb-10">FAQ’s</h1>
          <p className="fs-14">Let us help answer the most common questions.</p>
        </div>
        <Collapse
          expandIcon={({ isActive }) => (
            <Expand direction={isActive ? 'up' : 'down'} />
          )}
          expandIconPosition="right"
          defaultActiveKey={['2']}
          items={[
            {
              key: '1',
              label: 'General',
              children: (
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium reprehenderit neque similique ipsa quas et cumque
                  doloremque nostrum, quo sit molestias assumenda deleniti iste
                  illum facere libero unde ratione repellendus.
                </p>
              ),
            },
            {
              key: '2',
              label: 'Users',
              children: (
                <p>
                  Donec placerat, lectus sed mattis semper, neque lectus feugiat
                  lectus, varius pulvinar diam eros in elit. Pellentesque
                  convallis laoreet laoreet.Donec placerat, lectus sed mattis
                  semper, neque lectus feugiat lectus, varius pulvinar diam eros
                  in elit. Pellentesque convallis laoreet laoreet.
                </p>
              ),
            },
            {
              key: '3',
              label: 'Advanced settings',
              children: (
                <p>
                  Donec placerat, lectus sed mattis semper, neque lectus feugiat
                  lectus, varius pulvinar diam eros in elit. Pellentesque
                  convallis laoreet laoreet.Donec placerat, lectus sed mattis
                  semper, neque lectus feugiat lectus, varius pulvinar diam eros
                  in elit. Pellentesque convallis laoreet laoreet.
                </p>
              ),
            },
          ]}
        />
      </div>
    </PricingBase>
  );
};

export { Pricing };
