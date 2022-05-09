create table reimburse(
      reimburse_id int primary key generated always as identity,
      amount int,
      submitted_date date,
      resolve_date date,
      description varchar(200),
      reimburse_author int references users(user_id) on delete cascade,
      resolver int references users(user_id)on delete cascade,
      reimburse_status int references reimbursement_status(status_id) on delete cascade,
      reimburse_type int  references reimbursement_type(type_id) on delete cascade
);

create table users (
user_id int primary key generated always as identity,
username varchar(100),
password varchar(150),
first_name varchar(150),
last_name varchar(100),
email varchar (100) unique,
role_ int references user_roles(role_id) not null
);

create table user_roles (
role_id int primary key generated always as identity,
role_des varchar (100)
);

create table reimbursement_status(
status_id int  primary key generated always as identity,
status varchar(100)
);

create table reimbursement_type(
type_id int  primary key generated always as identity,
type_ varchar(100)
);

drop table users;
drop table reimburse;
select * from reimburse;
select * from users;
select * from user_roles;
insert into user_roles (role_des) values ('manager') ,('user');
insert into reimbursement_status (status) values (pending),(resolved);
insert into reimbursement_type(type_) values (approve),(deny),;
create or replace procedure create_user(a varchar(64), b varchar(64), c varchar(64), d varchar(64), e varchar(64), f int) as $$
begin
	insert into users(username, password, first_name, last_name, email, role_) values(a, b, c, d, e, f);
end; $$ language 'plpgsql';
insert into users (username, password, first_name, last_name, email, role_) values ('ag','ag','ag','ag','ag',2);