import { supabase } from './supabase';

export const signInWithOAuth = async (provider) => {
  const { user, error } = await supabase.auth.signInWithOAuth({ provider });
  if (error) throw error;
  return user;
};

export const signOut = async () => {
  await supabase.auth.signOut();
};
