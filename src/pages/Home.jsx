import { useApp } from '../context/AppContext';
import Loader from '../components/Loader';
import ContactCard from '../components/ContactCard';

function Home() {
  const { isLoading, contacts } = useApp();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
}

export default Home;
