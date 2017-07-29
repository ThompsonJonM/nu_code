drop database if exists top_songsdb;
create database top_songsdb;

use top_songsdb;

create table top5000 (
	position int not null,
	artist varchar(100) null,
	song varchar(100) null,
	year int null,
	raw_total decimal(10,4) null,
	raw_usa decimal(10,4) null,
	raw_uk decimal(10,4) null,
	raw_eur decimal(10,4) null,
	raw_glo decimal(10,4) null,
	primary key (position)
);

select * from top5000;