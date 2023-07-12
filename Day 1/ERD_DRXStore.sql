use official_manchesterunited;

-- Tạo bảng Customer (Khách hàng) --
CREATE TABLE Customer (
	id_customer int auto_increment primary key,
    name varchar(45),
    email varchar(45),
    phone varchar(45),
    address varchar(45)
);

-- Tạo bảng Order (mua hàng) --
CREATE TABLE `Order` (
	id_order int auto_increment primary key,
    customerID int,
    foreign key (customerID) references customer(id_customer),
    order_date date,
    total_price decimal(10,2)
);

-- Tạo bảng Product (sản phẩm bán) --
CREATE TABLE Product (
	id_product int auto_increment primary key,
    name varchar(45),
    price decimal(10,2),
    description text
);

-- Tạo bảng OrderItem (lưu thông tin các mặt hàng trong đơn) -- 
CREATE TABLE OrderItem (
	id_orderitem int auto_increment primary key,
    quantity int,
	price decimal(10,2),
    orderID int,
    productID int,
    foreign key (orderID) references `order`(id_order),
    foreign key (productID) references product(id_product)
);