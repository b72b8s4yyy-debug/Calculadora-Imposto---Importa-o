-- Rode este script no painel do Supabase: SQL Editor → New query → Run
-- Cria a tabela usada para salvar o estado do app por navegador (sem login).

create table if not exists app_state (
  client_id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table app_state enable row level security;

-- Sem tela de login: o isolamento entre usuários depende do client_id ser
-- imprevisível (gerado com crypto.randomUUID() e guardado no localStorage),
-- não de autenticação real. Qualquer pessoa com esse id consegue ler/escrever
-- a linha correspondente — equivalente a um link secreto, não uma senha.
create policy "anon select" on app_state for select using (true);
create policy "anon insert" on app_state for insert with check (true);
create policy "anon update" on app_state for update using (true) with check (true);
