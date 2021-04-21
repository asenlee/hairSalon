-- Customers
INSERT INTO Customers VALUES(1234567891, 'test1@test.com', 'Bob', 'Chicken', 1);
INSERT INTO Customers VALUES(1234567892, 'test2@test.com', 'Bob', 'Chicken', 2);
INSERT INTO Customers VALUES(1234567893, 'test3@test.com', 'Bob', 'Lee', 3);
INSERT INTO Customers VALUES(1234567894, 'test4@test.com', 'Emily', 'Lee', NULL);
INSERT INTO Customers VALUES(1234567895, 'test5@test.com', 'Emily', 'Chicken', NULL);

-- Beverages
INSERT INTO Beverages values(1, 'Heineken', 'ultra strong');
INSERT INTO Beverages values(2, 'Budweiser', 'ultra light');
INSERT INTO Beverages values(3, 'PurePiss', 'ultra strong');
INSERT INTO Beverages values(4, 'Dusche Gold', 'cold tsunami');
INSERT INTO Beverages values(5, 'Heineken', 'golden shower');


-- HairSalon
INSERT INTO HairSalon VALUES(1, 100, 'v5j2b1', 'salon1', '100 test ave');
INSERT INTO HairSalon VALUES(2, 111, 'v5j2b1', 'salon2', '100 test ave');
INSERT INTO HairSalon VALUES(3, 100, 'v5j2b2', 'salon2', '100 test ave');
INSERT INTO HairSalon VALUES(4, 100, 'v5j2b3', 'salon3', '102 test ave');
INSERT INTO HairSalon VALUES(5, 222, 'v5j2b4', 'salon4', '103 test ave');
INSERT INTO HairSalon VALUES(6, 100, 'v5j2b5', 'salon5', '104 test ave');

-- Lounge
INSERT INTO Lounge VALUES(1, 'lounge1', 1);
INSERT INTO Lounge VALUES(2, 'lounge2', 1);
INSERT INTO Lounge VALUES(1, 'lounge1', 2);
INSERT INTO Lounge VALUES(2, 'lounge2', 2);
INSERT INTO Lounge VALUES(3, 'lounge3', 3);

-- SellsBeverages
INSERT INTO SellsBeverages VALUES(1, 1, 1);
INSERT INTO SellsBeverages VALUES(1, 1, 2);
INSERT INTO SellsBeverages VALUES(2, 1, 1);
INSERT INTO SellsBeverages VALUES(1, 2, 1);
INSERT INTO SellsBeverages VALUES(1, 2, 5);
INSERT INTO SellsBeverages VALUES(3, 3, 5);


-- BeveragePurchases
INSERT INTO BeveragePurchases VALUES(1234567891, 1, 1, 1, 2);
INSERT INTO BeveragePurchases VALUES(1234567891, 2, 1, 1, 7);
INSERT INTO BeveragePurchases VALUES(1234567892, 1, 2, 1, 3);
INSERT INTO BeveragePurchases VALUES(1234567892, 1, 1, 1, 2);
INSERT INTO BeveragePurchases VALUES(1234567893, 5, 3, 3, 1);


-- ShopCity
INSERT INTO ShopCity VALUES('v5j2b1', 'Vancouver', 'BC');
INSERT INTO ShopCity VALUES('v5j2b2', 'Vancouver', 'BC');
INSERT INTO ShopCity VALUES('v5j2b3', 'Delta', 'BC');
INSERT INTO ShopCity VALUES('v5j2b4', 'Victoria', 'BC');
INSERT INTO ShopCity VALUES('v5j2b5', 'Victoria', 'NF');


-- HairProducts
INSERT INTO HairProducts VALUES(111, 'Radiant Color Shine', 'Dove');
INSERT INTO HairProducts VALUES(222, 'Radiant Color Shine', 'Pantene');
INSERT INTO HairProducts VALUES(333, 'Damage Therapy - Intense Repair', 'Dove');
INSERT INTO HairProducts VALUES(444, 'Color Treatment', 'CWK');
INSERT INTO HairProducts VALUES(555, 'Radiant Color', 'CWJ');
INSERT INTO HairProducts VALUES(666, 'Radiant Color - Extra', 'CWI');
INSERT INTO HairProducts VALUES(777, 'Anti Spy Hair Get - Protect your brain from the government spies', 'CWI');

-- SellsProducts
INSERT INTO SellsProducts VALUES(111, 1, 8.68, 25);
INSERT INTO SellsProducts VALUES(222,1, 7.89, 226);
INSERT INTO SellsProducts VALUES(333,1, 7.89, 226);
INSERT INTO SellsProducts VALUES(444,1, 7.89, 226);
INSERT INTO SellsProducts VALUES(555,1, 7.89, 226);
INSERT INTO SellsProducts VALUES(666,1, 7.89, 226);
INSERT INTO SellsProducts VALUES(777,1, 9.99, 50);

INSERT INTO SellsProducts VALUES(111, 2, 8.68, 25);
INSERT INTO SellsProducts VALUES(222, 2, 17.12, 65);
INSERT INTO SellsProducts VALUES(333, 2, 72.12, 78);
INSERT INTO SellsProducts VALUES(444, 2, 36.23, 24);
INSERT INTO SellsProducts VALUES(555, 2, 199.12, 36);
INSERT INTO SellsProducts VALUES(666, 2, 12.89, 75);
INSERT INTO SellsProducts VALUES(777, 2, 14.99, 125);

INSERT INTO SellsProducts VALUES(777, 2, 14.99, 72);
INSERT INTO SellsProducts VALUES(333, 5, 12, 123);
INSERT INTO SellsProducts VALUES(444, 6, 75.2, 24);

-- ProductPurchases
INSERT INTO ProductPurchases VALUES(1234567891, 111, 1, 40);
INSERT INTO ProductPurchases VALUES(1234567892, 111, 1, 40);
INSERT INTO ProductPurchases VALUES(1234567891, 222, 1, 40);
INSERT INTO ProductPurchases VALUES(1234567892, 333, 5, 40);
INSERT INTO ProductPurchases VALUES(1234567892, 444, 6, 40);

-- ProductExpensiveness
INSERT INTO ProductExpensiveness VALUES('Dove', 3);
INSERT INTO ProductExpensiveness VALUES('Pantene', 4);
INSERT INTO ProductExpensiveness VALUES('CWI', 5);
INSERT INTO ProductExpensiveness VALUES('CWK', 1);
INSERT INTO ProductExpensiveness VALUES('CWJ', 2);

-- Employees
INSERT INTO Employees VALUES(112345, 'Random', 'Person', 'Cashier', 1);
INSERT INTO Employees VALUES(212345, 'Random', 'Person', 'Cashier', 1);
INSERT INTO Employees VALUES(312345, 'Random', 'Person', 'Stylist', 1);
INSERT INTO Employees VALUES(412345, 'Random', 'Chicken',  'Manager', 1);
INSERT INTO Employees VALUES(512345, 'Emily', 'Chicken', 'Stylist', 1);
INSERT INTO Employees VALUES(612345, 'Bob', 'Lee', 'Stylist', 2);

-- Schedule
INSERT INTO Schedule VALUES(112345, 'mon', 8, 15);
INSERT INTO Schedule VALUES(112345, 'tue', 8, 15);
INSERT INTO Schedule VALUES(112345, 'wed', 8, 15);
INSERT INTO Schedule VALUES(112345, 'thu', 8, 15);
INSERT INTO Schedule VALUES(312345, 'mon', 8, 15);
INSERT INTO Schedule VALUES(312345, 'tue', 12, 20);
INSERT INTO Schedule VALUES(312345, 'wed', 8, 15);
INSERT INTO Schedule VALUES(412345, 'wed', 12, 20);
INSERT INTO Schedule VALUES(512345, 'fri', 9, 16);
INSERT INTO Schedule VALUES(612345, 'fri', 9, 16);


-- Bookings
INSERT INTO Bookings VALUES(1234567891, 312345, '2021-03-15', 'mon', 8, 9, 'hello');
INSERT INTO Bookings VALUES(1234567892, 312345, '2021-03-15', 'mon', 8, 9, 'send help');
INSERT INTO Bookings VALUES(1234567893, 412345, '2021-03-15', 'wed', 12, 13, NULL);
INSERT INTO Bookings VALUES(1234567891, 312345, '2021-03-15', 'tue', 12, 13, 'coming back for another session');
INSERT INTO Bookings VALUES(1234567894, 512345, '2021-03-15', 'fri', 9, 10, 'any new products recommendation?');
INSERT INTO Bookings VALUES(1234567891, 612345, '2021-03-31', 'fri', 9, 10, 'got transferred to this shop');


-- Reviews
INSERT INTO Reviews VALUES(1234567891, 4, 'very good', 1);
INSERT INTO Reviews VALUES(1234567891, 4, 'very good', 2);
INSERT INTO Reviews VALUES(1234567892, 0, 'very bad', 1);
INSERT INTO Reviews VALUES(1234567893, 0, 'very bad', 1);
INSERT INTO Reviews VALUES(1234567894, 0, 'very bad', 1);
