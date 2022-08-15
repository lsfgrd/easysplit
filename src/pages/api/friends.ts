import type { NextApiRequest, NextApiResponse } from 'next';

export type Person = {
  id: number;
  name: string;
  checked?: boolean;
};

const getFriends = () => {
  return [
    {
      id: 1,
      name: 'John',
      checked: true,
    },
    {
      id: 2,
      name: 'Sarah',
      checked: false,
    },
    {
      id: 3,
      name: 'Rafael',
      checked: true,
    },
  ] as Person[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Person[]>
) {
  res.status(200).json(getFriends());
}

export { getFriends };
