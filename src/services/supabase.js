import { createClient } from "@supabase/supabase-js"
export const supabaseUrl = "https://oguowhtumiahzlbpikti.supabase.co"
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ndW93aHR1bWlhaHpsYnBpa3RpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU0Nzc0MjAsImV4cCI6MjA0MTA1MzQyMH0.Ly8N0pacNFgU_8cx9sMmesm2Xny0M_ANKbcLwvbnSTw"
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase
