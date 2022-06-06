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
insert into users (first_name, last_name, email, username, password, role_) values ('Annalee', 'Stothard', 'astothard0@mit.edu', 'astothard0', 'XUat5l7Q', 2);
insert into users (first_name, last_name, email, username, password, role_) values ('Brenden', 'Bartram', 'bbartram1@rakuten.co.jp', 'bbartram1', 'yLuiu0OZig9Z', 2);
insert into users (first_name, last_name, email, username, password, role_) values ('Lind', 'Mansell', 'lmansell2@un.org', 'lmansell2', 'iT1nN8wv', 2);
insert into users (first_name, last_name, email, username, password, role_) values ('Mack', 'Horsell', 'mhorsell3@networksolutions.com', 'mhorsell3', 'eXbBeQxdP', 2);
insert into users (first_name, last_name, email, username, password, role_) values ('Sherwin', 'Wrennall', 'swrennall4@typepad.com', 'swrennall4', 'z1fGBl', 2);
insert into users (first_name, last_name, email, username, password, role_) values ('Cirilo', 'Filippov', 'cfilippov5@typepad.com', 'cfilippov5', 'jiukJmx66YtE', 2);
insert into users (first_name, last_name, email, username, password, role_) values ('Reinaldo', 'Cathrall', 'rcathrall6@si.edu', 'rcathrall6', 'pvAkloSIO', 2);
insert into users (first_name, last_name, email, username, password, role_) values ('Pet', 'Danelet', 'pdanelet7@infoseek.co.jp', 'pdanelet7', 'SrTysz8ERxZ2', 2);
insert into users (first_name, last_name, email, username, password, role_) values ('Sybilla', 'Welbelove', 'swelbelove8@behance.net', 'swelbelove8', 'TH1fpRXTR6T', 2);
insert into users (first_name, last_name, email, username, password, role_) values ('Justis', 'Dumphy', 'jdumphy9@simplemachines.org', 'jdumphy9', 'jPvjGu0jQ7p', 2);
insert into users (first_name, last_name, email, username, password, role_) values ('Huntlee', 'Devenish', 'hdevenisha@ox.ac.uk', 'hdevenisha', 'k2k8vF0Jk', 2);
insert into users (first_name, last_name, email, username, password, role_) values ('Tory', 'Bentinck', 'tbentinckb@geocities.jp', 'tbentinckb', 'CZE1Sf5TIgUB', 2);
insert into users (first_name, last_name, email, username, password, role_) values ('Cindee', 'Leftbridge', 'cleftbridgec@ebay.co.uk', 'cleftbridgec', 'nqydRqjuJ', 2);
insert into users (first_name, last_name, email, username, password, role_) values ('Casar', 'Willoughby', 'cwilloughbyd@state.gov', 'cwilloughbyd', 'n0QNt14', 2);
insert into users (first_name, last_name, email, username, password, role_) values ('Brody', 'Fairbourn', 'bfairbourne@usa.gov', 'bfairbourne', 'FmfXIw', 2);
insert into users (first_name, last_name, email, username, password, role_) values ('Phyllida', 'Wyld', 'pwyldf@histats.com', 'pwyldf', '5UJn3067mR0P', 2);
insert into users (first_name, last_name, email, username, password, role_) values ('Pavel', 'Burgett', 'pburgettg@tamu.edu', 'pburgettg', 'JAvOHzB8lIH', 2);
insert into users (first_name, last_name, email, username, password, role_) values ('Birch', 'Napleton', 'bnapletonh@accuweather.com', 'bnapletonh', 'l99GVYmR3P5', 2);
insert into users (first_name, last_name, email, username, password, role_) values ('Boony', 'Hake', 'bhakei@elpais.com', 'bhakei', 'aDmy0s', 2);
insert into users (first_name, last_name, email, username, password, role_) values ('Misti', 'Oselton', 'moseltonj@pcworld.com', 'moseltonj', 'KV1n9G', 2);
insert into users (first_name, last_name, email, username, password, role_) values ('Cara', 'Castagneri', 'ccastagnerik@bluehost.com', 'ccastagnerik', 'erBswCQh', 2);
insert into users (first_name, last_name, email, username, password, role_) values ('Madelina', 'Darragh', 'mdarraghl@jiathis.com', 'mdarraghl', 'rHTIrM', 2);
insert into users (first_name, last_name, email, username, password, role_) values ('Katrine', 'Dymocke', 'kdymockem@jigsy.com', 'kdymockem', 'VUerOzvYrp', 2);
insert into users (first_name, last_name, email, username, password, role_) values ('Rorie', 'Franklen', 'rfranklenn@clickbank.net', 'rfranklenn', 'vxF6ETsJFBbU', 2);
insert into users (first_name, last_name, email, username, password, role_) values ('Walden', 'Brattan', 'wbrattano@1688.com', 'wbrattano', 'hJV6VI', 2);

insert into reimburse (amount, submitted_date, resolve_date, description, reimburse_author, resolver, reimburse_status, reimburse_type) values (16, '8/27/2021', '5/30/2021', 'Polarised solution-oriented help-desk', 33, 2, 1, 1);
insert into reimburse (amount, submitted_date, resolve_date, description, reimburse_author, resolver, reimburse_status, reimburse_type) values (20, '2/19/2022', '12/14/2021', 'Optional hybrid middleware', 41, 2, 1, 2);
insert into reimburse (amount, submitted_date, resolve_date, description, reimburse_author, resolver, reimburse_status, reimburse_type) values (82, '7/25/2021', '7/27/2021', 'Cloned global knowledge base', 45, 2, 1, 3);
insert into reimburse (amount, submitted_date, resolve_date, description, reimburse_author, resolver, reimburse_status, reimburse_type) values (80, '6/21/2021', '9/6/2021', 'Front-line bifurcated throughput', 34, 2, 1, 4);
insert into reimburse (amount, submitted_date, resolve_date, description, reimburse_author, resolver, reimburse_status, reimburse_type) values (7, '11/30/2021', '3/6/2022', 'Function-based scalable help-desk', 35, 2, 1, 3);
insert into reimburse (amount, submitted_date, resolve_date, description, reimburse_author, resolver, reimburse_status, reimburse_type) values (60, '12/4/2021', '3/30/2022', 'Ameliorated bifurcated help-desk', 47, 2, 1, 1);
insert into reimburse (amount, submitted_date, resolve_date, description, reimburse_author, resolver, reimburse_status, reimburse_type) values (9, '12/13/2021', '8/11/2021', 'Progressive holistic throughput', 37, 2, 1, 1);
insert into reimburse (amount, submitted_date, resolve_date, description, reimburse_author, resolver, reimburse_status, reimburse_type) values (7, '11/14/2021', '3/18/2022', 'Optimized real-time paradigm', 48, 2, 1, 2);
insert into reimburse (amount, submitted_date, resolve_date, description, reimburse_author, resolver, reimburse_status, reimburse_type) values (7, '5/12/2022', '1/11/2022', 'Open-source content-based firmware', 39, 2, 1, 3);
insert into reimburse (amount, submitted_date, resolve_date, description, reimburse_author, resolver, reimburse_status, reimburse_type) values (64, '8/22/2021', '3/16/2022', 'Synchronised stable product', 40, 2, 1, 3);
insert into reimburse (amount, submitted_date, resolve_date, description, reimburse_author, resolver, reimburse_status, reimburse_type) values (55, '11/24/2021', '4/18/2022', 'Diverse contextually-based info-mediaries', 50, 2, 1, 4);