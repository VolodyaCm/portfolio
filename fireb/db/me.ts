import db from '@/fireb/db';
import { getDoc, doc } from 'firebase/firestore';

export const getMe = async () => {
  const res = await getDoc(doc(db, 'info', 'me'));
  return res.data();
};
