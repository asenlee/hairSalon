CREATE table Customers (
    phoneNumber INTEGER PRIMARY KEY ,
    email CHAR(40) UNIQUE,
    firstName CHAR(20),
    lastName CHAR(20)
);
    
CREATE table Member (
    phoneNumber INTEGER PRIMARY KEY,
    loyaltyCardID INTEGER UNIQUE,
    FOREIGN KEY (phoneNumber) REFERENCES Customers(phoneNumber) on DELETE CASCADE
);

CREATE table Beverages
(
    beverageID INTEGER PRIMARY KEY ,
    brand CHAR(20),
    drinkName CHAR(40),
    UNIQUE (brand, drinkName)
);

CREATE table HairSalon
(
    shopID INTEGER PRIMARY KEY ,
    shopNumber INTEGER,
    postalCode CHAR(20),
    shopName CHAR(20),
    street CHAR(20)
);

CREATE table Lounge
(
    loungeID INTEGER,
    name CHAR(20),
    shopID INTEGER,
    PRIMARY KEY (loungeID, shopID),
    FOREIGN KEY (shopID) REFERENCES HairSalon(shopID) on DELETE CASCADE
);

CREATE table SellsBeverages
(
    loungeID INTEGER,
    shopID INTEGER,
    beverageID INTEGER,
    PRIMARY KEY (loungeID, shopID, beverageID),
    FOREIGN KEY (loungeID, shopID) REFERENCES Lounge(loungeID, shopID) on DELETE CASCADE,
    FOREIGN KEY (beverageID) REFERENCES Beverages(beverageID) on DELETE CASCADE
);


CREATE table BeveragePurchases
(
    phoneNumber INTEGER,
    beverageID INTEGER,
    loungeID INTEGER,
    shopID INTEGER,
    quantity INTEGER,
    PRIMARY KEY (phoneNumber , beverageID, loungeID, shopID),
    FOREIGN KEY (phoneNumber) REFERENCES Customers(phoneNumber) on DELETE CASCADE,
    FOREIGN KEY (beverageID) REFERENCES Beverages(beverageID) on DELETE CASCADE,
    FOREIGN KEY (loungeID, shopID) REFERENCES Lounge(loungeID, shopID) on DELETE CASCADE
);

CREATE table ShopCity
(
    postalCode CHAR(20)  primary key,
    city CHAR(20),
    province CHAR(20)
);


CREATE table HairProducts
(
    productID INTEGER PRIMARY KEY ,
    productName CHAR(40),
    brand CHAR(20),
    price FLOAT,
    quantity INTEGER,
    UNIQUE (productName, brand)
);


CREATE table SellsProducts
(
    productID INTEGER ,
    shopID INTEGER,
    primary key (productID, shopID),
    foreign key (productID) references HairProducts(productID),
    foreign key (shopID) references HairSalon(shopID)
);

CREATE table ProductPurchases
(
    phoneNumber INTEGER,
    productID INTEGER,
    shopID INTEGER,
    quantity INTEGER,
    PRIMARY KEY (phoneNumber, productID, shopID),
    FOREIGN KEY (shopID) REFERENCES HairSalon(shopID) on DELETE CASCADE,
    FOREIGN KEY (productID) REFERENCES HairProducts(productID) on DELETE CASCADE,
    FOREIGN KEY (phoneNumber) REFERENCES Customers(phoneNumber) on DELETE CASCADE
);

CREATE table ProductExpensiveness
(
    brand CHAR(20) PRIMARY KEY,
    expensiveness INTEGER
);

CREATE table Employees
(
    empID INTEGER PRIMARY KEY ,
    firstName CHAR(20),
    lastName CHAR(20),
    position CHAR(20),
    shopID INTEGER NOT NULL,
    FOREIGN KEY (shopID) REFERENCES HairSalon(shopID) on DELETE CASCADE
);

drop table schedule;
CREATE table SCHEDULE
(
    empID INTEGER,
    day CHAR(10),
    shiftStart INTEGER,
    end INTEGER,
    PRIMARY KEY (empID, day),
    FOREIGN KEY (empID) references Employees(empID) on delete cascade
);

CREATE table Bookings
(
    phoneNumber INTEGER,
    empID INTEGER,
    date CHAR(10),
    day CHAR(3),
    startTime INTEGER,
    endTime INTEGER,
    notes CHAR(250),
    PRIMARY KEY (phoneNumber, empID, date, startTime),
    FOREIGN KEY (phoneNumber) REFERENCES Customers(phoneNumber) on DELETE CASCADE,
    FOREIGN KEY (empID) REFERENCES Employees(empID) on DELETE CASCADE
);

CREATE table Reviews
(
    phoneNumber INTEGER,
    rating INTEGER,
    review CHAR(250),
    shopID INTEGER,
    PRIMARY KEY (phoneNumber, shopID),
    FOREIGN KEY (phoneNumber) REFERENCES Customers(phoneNumber) on DELETE CASCADE,
    FOREIGN KEY (shopID) REFERENCES HairSalon(shopID) on DELETE CASCADE
);

