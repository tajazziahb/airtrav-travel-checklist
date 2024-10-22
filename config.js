import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabaseUrl = 'https://eadbaafjveoawihuijpz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhZGJhYWZqdmVvYXdpaHVpanB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYxNzk4MTIsImV4cCI6MjA0MTc1NTgxMn0.wV7DUkg9vLbo1wumRMHhIY25ZYSaD6DXP4hZrbpal_g'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;