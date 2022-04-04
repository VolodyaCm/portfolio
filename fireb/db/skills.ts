import db from '@/fireb/db';
import {
  collection,
  getDocs,
  query,
  addDoc,
  updateDoc,
  doc,
  orderBy,
} from 'firebase/firestore';
import SkillItemType, { OmitIdSkillItemType } from '@/ptypes/skill';

export const getSkills = async (): Promise<SkillItemType[]> => {
  const skillsRef = collection(db, 'skills');
  const skillsQuery = await query(skillsRef, orderBy('index', 'asc'));
  const res = await getDocs(skillsQuery);
  const skills: SkillItemType[] = res.docs.map((p) => {
    return { id: p.id, ...(p.data() as OmitIdSkillItemType) };
  });

  return skills;
};

export const updateSkill = ({ id, ...data }: SkillItemType) => {
  return updateDoc(doc(db, 'skills', id), data as OmitIdSkillItemType);
};

export const addSkill = async (data: OmitIdSkillItemType) => {
  const docRef = await addDoc(collection(db, 'skills'), data);
  return docRef;
};
