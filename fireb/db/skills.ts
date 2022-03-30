import db from '@/fireb/db';
import { collection, getDocs, query } from 'firebase/firestore';

export const getSkills = async () => {
  const skillsRef = collection(db, 'skills');
  const skillsQuery = await query(skillsRef);
  const res = await getDocs(skillsQuery);

  return res.docs.map((p) => {
    return { id: p.id, ...p.data() };
  });
};
