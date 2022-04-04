import '@/fireb/.';
import db from '@/fireb/db';
import { useState, useEffect } from 'react';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { IHeaderData } from '@/containers/Header';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { ILoginUser } from '@/ptypes/user';

export const getMe = async () => {
  const res = await getDoc(doc(db, 'info', 'me'));
  return res.data();
};

export const updateMe = (data: IHeaderData) => {
  return updateDoc(doc(db, 'info', 'me'), {
    title: data.title,
    description: data.description,
  });
};

export const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const { currentUser } = auth;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, function () {
      setTimeout(() => setLoading(false), 500);
    });
    return unsubscribe;
  }, []);

  const login = async ({ email, password }: ILoginUser) => {
    try {
      setLoading(true);
      const res = await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  const signup = async ({ email, password }: ILoginUser) => {
    try {
      setLoading(true);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false);
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      const res = await signOut(auth);
      setLoading(false);
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    login,
    signup,
    logout,
    currentUser,
    loading,
    auth,
  };
};
