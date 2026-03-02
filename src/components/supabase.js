import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://hgpqeelzzlnvnzpakxrm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhncHFlZWx6emxudm56cGFreHJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIzMTI0MDIsImV4cCI6MjA4Nzg4ODQwMn0.f3HDRlDezcmz86PqJnDfWJyxJUyuoL6bPffyZsu2YvA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
