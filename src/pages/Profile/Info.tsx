import { useReducer } from 'react';
import { Input, Select, Radio } from 'antd';

import { InfoContainer } from './Profile.styles';
import { ProfileAction } from './ProfileAction';
import { Grid } from '../../layouts/utils';

const initialData = {
  bio: 'The name’s John Deo. I am a tireless seeker of knowledge, occasional purveyor of wisdom and also, coincidentally, a graphic designer. Algolia helps businesses across industries quickly create relevant 😎, scaLabel 😀, and lightning 😍 fast search and discovery experiences.',
  birthDate: '',
  phone: '+1-123-456-8790',
  website: 'www.themeselection.com',
  country: 'USA',
  language: 'English',
  gender: 'Male',
};

const Info = () => {
  const [state, setState] = useReducer(
    (state: typeof initialData, action: Partial<typeof initialData>) => ({
      ...state,
      ...action,
    }),
    initialData
  );

  const getProps = (field: keyof typeof state) => {
    return {
      value: state[field],
      onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        setState({ [field]: e.target.value });
      },
    };
  };

  return (
    <InfoContainer>
      <Grid className="my-20" columns={2} gap={24}>
        <Input.TextArea
          className="full-width"
          placeholder="Bio"
          {...getProps('bio')}
        />
        <Input placeholder="Birth Date" {...getProps('birthDate')} />
        <Input placeholder="Phone" {...getProps('phone')} />
        <Input placeholder="Website" {...getProps('website')} />
        <Input placeholder="Country" {...getProps('country')} />
        <Select
          defaultValue={initialData.language}
          options={[
            { label: 'English', value: 'English' },
            { label: 'French', value: 'French' },
            { label: 'Spanish', value: 'Spanish' },
          ]}
        />
        <div>
          <label className="block gender-label mb-10" htmlFor="gender">
            Gender
          </label>
          <Radio.Group
            className="ml-10"
            id="gender"
            options={[
              { label: 'Male', value: 'Male' },
              { label: 'Female', value: 'Female' },
              { label: 'Other', value: 'Other' },
            ]}
          />
        </div>
      </Grid>
      <ProfileAction />
    </InfoContainer>
  );
};

export { Info };
