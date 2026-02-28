-- Create a table for reviews
create table reviews (
  id uuid default gen_random_uuid() primary key,
  course_id text not null,
  course_title_context text,
  professor text not null,
  year text not null,
  content text not null,
  author text,
  created_at timestamptz default now()
);

-- Enable Row Level Security (RLS)
alter table reviews enable row level security;

-- Create a policy that allows anyone to read reviews
create policy "Public reviews are viewable by everyone"
on reviews for select
to anon
using (true);

-- Create a policy that allows anyone to insert reviews
create policy "Anyone can insert reviews"
on reviews for insert
to anon
with check (true);
