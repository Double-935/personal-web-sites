-- Friend Space data: one private state row per Supabase Auth user.
-- Run this file in Supabase SQL Editor before enabling database persistence.

create table if not exists public.friend_space_states (
  user_id uuid primary key references auth.users(id) on delete cascade,
  state jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create or replace function public.set_friend_space_states_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists friend_space_states_updated_at
on public.friend_space_states;

create trigger friend_space_states_updated_at
before update on public.friend_space_states
for each row
execute function public.set_friend_space_states_updated_at();

alter table public.friend_space_states enable row level security;

revoke all on table public.friend_space_states from anon, authenticated;
grant select, insert, update, delete
on table public.friend_space_states
to authenticated;

drop policy if exists "Users can read their own friend space state"
on public.friend_space_states;

create policy "Users can read their own friend space state"
on public.friend_space_states
for select
to authenticated
using ((select auth.uid()) = user_id);

drop policy if exists "Users can create their own friend space state"
on public.friend_space_states;

create policy "Users can create their own friend space state"
on public.friend_space_states
for insert
to authenticated
with check ((select auth.uid()) = user_id);

drop policy if exists "Users can update their own friend space state"
on public.friend_space_states;

create policy "Users can update their own friend space state"
on public.friend_space_states
for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

drop policy if exists "Users can delete their own friend space state"
on public.friend_space_states;

create policy "Users can delete their own friend space state"
on public.friend_space_states
for delete
to authenticated
using ((select auth.uid()) = user_id);
