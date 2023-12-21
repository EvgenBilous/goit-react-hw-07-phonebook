import PhoneBook from './PhoneBook/PhoneBook';
import Section from './Section/Section';
import ContactsList from './ContactsList/ContactsList';
import SearchFilter from './SearchFilter/SearchFilter';

const App = () => {
  return (
    <div>
      <Section title={'PhoneBook'}>
        <PhoneBook />
      </Section>
      <Section title={'Contacts'}>
        <SearchFilter />
        <ContactsList />
      </Section>
    </div>
  );
};

export default App;
