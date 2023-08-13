import { Card, Input } from 'antd';
import { MdSearch } from 'react-icons/md';
import { KnowledgeBaseRoot } from './KnowledgeBase.styles';
import image1 from '../../assets/cards/image1.png';
import image2 from '../../assets/cards/image2.png';
import image3 from '../../assets/cards/image3.png';
import image4 from '../../assets/cards/image4.png';
import image5 from '../../assets/cards/image5.png';
import image6 from '../../assets/cards/image6.png';

const items = [
  {
    id: 1,
    title: 'Sales Automation ⭐️',
    description:
      'There is perhaps no better demonstration of the folly of image of our tiny world.',
    image: image1,
  },
  {
    id: 2,
    title: 'Marketing Automation 🚀',
    description:
      'Look again at that dot. That’s here. That’s home. That’s us. On it everyone you love.',
    image: image2,
  },
  {
    id: 3,
    title: 'API Questions 📱',
    description:
      'Every hero and coward, every creator and destroyer of civilization.',
    image: image3,
  },
  {
    id: 4,
    title: 'Personalization 🤩',
    description:
      'It has been said that astronomy is a humbling and character experience.',
    image: image4,
  },
  {
    id: 5,
    title: 'Email Marketing ✉️',
    description:
      'There is perhaps no better demonstration of the folly of human conceits.',
    image: image5,
  },
  {
    id: 6,
    title: 'Demand Generation 🤟🏻',
    description: 'Competent means we will never take anything for granted.',
    image: image6,
  },
];

const KnowledgeBase = () => (
  <KnowledgeBaseRoot className="p-24">
    <div className="hero">
      <div className="hero-content">
        <h1>Hello, how can we help?</h1>
        <p>or choose a category to quickly find the help you need</p>
        <Input
          prefix={<MdSearch size={24} />}
          placeholder="Ask a question...."
        />
      </div>
    </div>
    <div className="content">
      {items.map(({ image, title, description, id }) => (
        <Card key={id} bordered={false} cover={<img alt={title} src={image} />}>
          <Card.Meta title={title} description={description} />
        </Card>
      ))}
    </div>
  </KnowledgeBaseRoot>
);

export default KnowledgeBase;
