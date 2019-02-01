drop table if exists houses;

create table if not exists houses (
    id serial,
    name varchar(250),
    address varchar(250),
    city varchar(100),
    state varchar(50),
    zipcode int
);

insert into houses (
    name,
    address,
    city,
    state,
    zipcode
) values (
    'first name',
    'first house',
    'first city',
    'first state',
    12345
);

insert into houses (
    name,
    address,
    city,
    state,
    zipcode
) values (
    'second name',
    'second house',
    'second city',
    'second state',
    23456
);

insert into houses (
    name,
    address,
    city,
    state,
    zipcode
) values (
    'third name',
    'third house',
    'third city',
    'third state',
    34567
);

select * from houses;