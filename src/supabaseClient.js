import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pkfvynrayfegsfqsnpni.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0Mzk5NTk1NCwiZXhwIjoxOTU5NTcxOTU0fQ.QTOv3KwDwefC-CZUFOLI0CBDDerHVNeIMOpRCOfbY58';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
