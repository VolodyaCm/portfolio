import db from '@/fireb/db';
import {
  collection,
  getDocs,
  query,
  getDoc,
  DocumentReference,
  orderBy,
} from 'firebase/firestore';

export const getExperience = async () => {
  const expRef = collection(db, 'experience');
  const expQuery = await query(expRef, orderBy('order', 'desc'));
  const res = await getDocs(expQuery);

  const getDocsByRef = (arr: DocumentReference[]) =>
    Promise.all(
      arr.map(async (t: DocumentReference) => (await getDoc(t)).data())
    );

  const data = await Promise.all(
    res.docs.map(async (p) => ({
      id: p.id,
      ...p.data(),
      tech: await getDocsByRef(p.get('tech')),
    }))
  );

  return data;
};
