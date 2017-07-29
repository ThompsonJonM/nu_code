drop database if exists top_songsdb;
create database top_songsdb;

use top_songsdb;

create table top5000 (
	id int auto_increment not null,
	artist varchar(255) null,
	song varchar(255) null,
	year int null,
	raw_total decimal(10,4) null,
	raw_usa decimal(10,4) null,
	raw_uk decimal(10,4) null,
	raw_eur decimal(10,4) null,
	raw_glo decimal(10,4) null,
	primary key (id)
);

select * from top5000;