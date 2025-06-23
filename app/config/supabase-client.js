
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_PROJECT_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY

const supabase = createClient("https://pxmzlfngxdvchukyqeca.supabase.co" , "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4bXpsZm5neGR2Y2h1a3lxZWNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwOTU5NjAsImV4cCI6MjA2NTY3MTk2MH0.jImEW0UUmzfcUa1Ph8D4vOZ8Uudnrb1uIX4V9GyPNcI")

export default supabase