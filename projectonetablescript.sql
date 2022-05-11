create table reimburse(
      reimburse_id int primary key generated always as identity,
      amount decimal(6,2),
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
select * from reimbursement_status;
select * from reimbursement_type;
insert into reimbursement_status (status) values ('pending'),('approved'),('denied');
insert into user_roles (role_des) values ('manager') ,('user');
insert into reimbursement_type(type_) values ('lodging'),('travel'),('food'),('other');
create or replace procedure create_user(a varchar(64), b varchar(64), c varchar(64), d varchar(64), e varchar(64), f int) as $$
begin
	insert into users(username, password, first_name, last_name, email, role_) values(a, b, c, d, e, f);
end; $$ language 'plpgsql';
create or replace procedure create_reimburse(a decimal(6,2), b date, c date, d varchar(200), e int, f int, g int, h int) as $$
begin
	insert into reimburse(amount, submitted_date, resolve_date, description, reimburse_author, resolver, reimburse_status, reimburse_type) values(a, b, c, d, e, f, g, h);
end; $$ language 'plpgsql';
insert into users (username, password, first_name, last_name, email, role_) values ('ag','ag','ag','ag','ag',2);
update users set username = 'ag', password = 'ag', first_name = 'peggy', last_name = 'lew', email = 'p@g', role_ = 1 where user_id = 1;
delete from users where user_id = 3;
select * from users where user_id = 1;
select * from users where username = 'bunny' and password = 'turtle';
insert into reimburse(amount, submitted_date, resolve_date, description, reimburse_author, resolver, reimburse_status, reimburse_type) values( 1.0, null, null, 'stuff', 1, 1, 1, 1);
select * from reimburse where reimburse_author = ?;