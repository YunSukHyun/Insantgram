import { client } from './sanity';

type OAuthUser = {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
};

export const addUser = async ({
  id,
  username,
  email,
  name,
  image,
}: OAuthUser) =>
  client.createIfNotExists({
    _id: id,
    _type: 'user',
    username,
    image,
    name,
    email,
    following: [],
    followers: [],
    bookmarks: [],
  });
