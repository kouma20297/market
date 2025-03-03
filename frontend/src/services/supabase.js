import { createClient } from '@supabase/supabase-js';

// .env ファイルから環境変数を読み込む
const supabaseUrl = process.env.VUE_APP_SUPABASE_URL; // VITE_ -> VUE_APP_
const supabaseKey = process.env.VUE_APP_SUPABASE_ANON_KEY; // VITE_ -> VUE_APP_

// エラー処理: 環境変数が設定されていない場合
if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL or anon key not set. Check your .env file.');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };