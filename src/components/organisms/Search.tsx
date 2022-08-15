import {
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  List,
  ListItem,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { FormEvent, useEffect, useState } from 'react';
import useFuzzySearch from '../../hooks/useFuzzySearch';
import { getFriends, Person } from '../../pages/api/friends';

const Search = () => {
  const property = 'name';
  const [inputValue, setInputValue] = useState('');
  const [selectedFriends, setSelectedFriends] = useState<Person[]>([]);
  const { t } = useTranslation('common');
  const people = getFriends();
  const results = useFuzzySearch<Person>(people, inputValue, {
    keys: [property],
    threshold: 0.25,
  });

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  useEffect(() => {
    setSelectedFriends(people.filter((x) => x.checked));
  }, [results]);

  return (
    <>
      <FormControl>
        <FormLabel>People</FormLabel>
        <Input value={inputValue} onChange={handleChange} type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <List>
          {selectedFriends.map((person) => (
            <ListItem>{person.name}</ListItem>
          ))}
        </List>
        <List>
          {results.length === 0 && <ListItem>{t('noResultsFound')}</ListItem>}
          {results.map((result) => (
            <ListItem key={result[property]}>
              <Checkbox isChecked={result.checked}>{result[property]}</Checkbox>
            </ListItem>
          ))}
        </List>
      </FormControl>
    </>
  );
};

export default Search;
